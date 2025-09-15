import React, { useRef, useEffect } from 'react'

const SimpleVariableEditor = ({ 
  value, 
  onChange, 
  placeholder = '', 
  className = '',
  style = {},
  rows = 3 
}) => {
  const editorRef = useRef(null)
  
  // Fonction pour créer le HTML avec variables colorées
  const createHighlightedHTML = (text) => {
    if (!text) return placeholder ? `<span style="color: #9ca3af;">${placeholder}</span>` : ''
    
    // Remplacer les variables <<variable>> par des spans colorés
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;&lt;([^&]+)&gt;&gt;/g, '<span style="background: #fef3c7; color: #1f2937; font-weight: bold; padding: 2px 4px; border-radius: 4px; border: 1px solid #f59e0b;">&lt;&lt;$1&gt;&gt;</span>')
      .replace(/\n/g, '<br>')
  }
  
  // Mettre à jour le contenu quand la valeur change
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== createHighlightedHTML(value)) {
      const selection = window.getSelection()
      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null
      const cursorPosition = range ? range.startOffset : 0
      
      editorRef.current.innerHTML = createHighlightedHTML(value)
      
      // Restaurer la position du curseur
      if (range && editorRef.current.firstChild) {
        try {
          const newRange = document.createRange()
          const textNode = editorRef.current.firstChild
          newRange.setStart(textNode, Math.min(cursorPosition, textNode.textContent?.length || 0))
          newRange.collapse(true)
          selection.removeAllRanges()
          selection.addRange(newRange)
        } catch (e) {
          // Ignorer les erreurs de positionnement du curseur
        }
      }
    }
  }, [value])
  
  // Gérer les changements de contenu
  const handleInput = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || ''
      onChange(text)
    }
  }
  
  // Gérer le placeholder
  const handleFocus = () => {
    if (editorRef.current && !value) {
      editorRef.current.innerHTML = ''
    }
  }
  
  const handleBlur = () => {
    if (editorRef.current && !value) {
      editorRef.current.innerHTML = createHighlightedHTML('')
    }
  }
  
  return (
    <div
      ref={editorRef}
      contentEditable
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`simple-variable-editor ${className}`}
      style={{
        minHeight: `${rows * 1.5}rem`,
        padding: '0.75rem',
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        background: 'white',
        color: '#374151',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        outline: 'none',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        ...style
      }}
      dangerouslySetInnerHTML={{ __html: createHighlightedHTML(value) }}
    />
  )
}

export default SimpleVariableEditor
