import React, { useRef, useEffect, useState } from 'react'
import './RichTextEditor.css'

const RichTextEditor = ({ 
  value = '', 
  onChange, 
  placeholder = '', 
  className = '',
  minHeight = '60px',
  ...props 
}) => {
  const editorRef = useRef(null)
  const [isComposing, setIsComposing] = useState(false)

  // Fonction pour créer le HTML avec les variables colorées
  const createHighlightedHTML = (text) => {
    if (!text) return ''
    
    // Échapper le HTML d'abord
    let escapedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>')
    
    // Puis remplacer les variables par des spans colorés
    escapedText = escapedText.replace(
      /&lt;&lt;([^&]+)&gt;&gt;/g, 
      '<span class="variable-highlight" data-variable="$1">&lt;&lt;$1&gt;&gt;</span>'
    )
    
    return escapedText
  }

  // Fonction pour extraire le texte brut du HTML
  const extractTextFromHTML = (html) => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    return tempDiv.textContent || tempDiv.innerText || ''
  }

  // Gérer les changements
  const handleInput = () => {
    if (isComposing || !editorRef.current) return
    
    const editor = editorRef.current
    const selection = window.getSelection()
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null
    
    // Sauvegarder la position du curseur
    let cursorPosition = 0
    if (range) {
      const preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(editor)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      cursorPosition = preCaretRange.toString().length
    }
    
    // Extraire le texte brut
    const rawText = extractTextFromHTML(editor.innerHTML)
    
    // Créer le nouveau HTML avec coloration
    const highlightedHTML = createHighlightedHTML(rawText)
    
    // Mettre à jour le contenu
    editor.innerHTML = highlightedHTML
    
    // Restaurer la position du curseur
    try {
      const textNodes = []
      const walker = document.createTreeWalker(
        editor,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )
      
      let node
      while (node = walker.nextNode()) {
        textNodes.push(node)
      }
      
      let currentPos = 0
      for (const textNode of textNodes) {
        const nodeLength = textNode.textContent.length
        if (currentPos + nodeLength >= cursorPosition) {
          const offset = cursorPosition - currentPos
          const newRange = document.createRange()
          newRange.setStart(textNode, Math.min(offset, nodeLength))
          newRange.collapse(true)
          selection.removeAllRanges()
          selection.addRange(newRange)
          break
        }
        currentPos += nodeLength
      }
    } catch (e) {
      // Si la restauration du curseur échoue, on place à la fin
      const newRange = document.createRange()
      newRange.selectNodeContents(editor)
      newRange.collapse(false)
      selection.removeAllRanges()
      selection.addRange(newRange)
    }
    
    // Notifier le changement
    if (onChange) {
      onChange({ target: { value: rawText } })
    }
  }

  // Initialiser le contenu
  useEffect(() => {
    if (editorRef.current && value !== extractTextFromHTML(editorRef.current.innerHTML)) {
      const highlightedHTML = createHighlightedHTML(value)
      editorRef.current.innerHTML = highlightedHTML
    }
  }, [value])

  // Gérer le placeholder
  const handleFocus = () => {
    if (editorRef.current && editorRef.current.innerHTML === '') {
      editorRef.current.innerHTML = ''
    }
  }

  const handleBlur = () => {
    if (editorRef.current && editorRef.current.innerHTML.trim() === '') {
      editorRef.current.innerHTML = ''
    }
  }

  return (
    <div className="rich-text-editor-container">
      <div
        ref={editorRef}
        contentEditable
        className={`rich-text-editor ${className}`}
        style={{ minHeight }}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => {
          setIsComposing(false)
          setTimeout(handleInput, 0)
        }}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
        {...props}
      />
    </div>
  )
}

export default RichTextEditor
