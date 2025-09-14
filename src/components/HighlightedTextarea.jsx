import React, { useRef, useEffect } from 'react'

const HighlightedTextarea = ({ 
  value = '', 
  onChange, 
  placeholder, 
  className = '', 
  minHeight = '60px',
  ...props 
}) => {
  const textareaRef = useRef(null)
  const highlightRef = useRef(null)

  // Fonction pour mettre en évidence les variables
  const highlightVariables = (text) => {
    if (!text) return ''
    
    // Échapper le HTML et remplacer les variables <<variable>> par des spans colorés
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>')
      .replace(/&lt;&lt;([^&]+)&gt;&gt;/g, '<span class="variable-highlight">&lt;&lt;$1&gt;&gt;</span>')
  }

  // Synchroniser le scroll entre le textarea et le div de highlight
  const handleScroll = () => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }

  // Gérer les changements de valeur
  const handleChange = (e) => {
    if (onChange) {
      onChange(e)
    }
  }

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.addEventListener('scroll', handleScroll)
      return () => {
        if (textarea) {
          textarea.removeEventListener('scroll', handleScroll)
        }
      }
    }
  }, [])

  const baseStyles = {
    minHeight,
    padding: '0.75rem',
    border: '2px solid rgb(229, 231, 235)', // border-gray-200
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  }

  return (
    <div className="relative highlighted-textarea-container">
      {/* Div pour le highlighting en arrière-plan */}
      <div
        ref={highlightRef}
        className="highlight-layer"
        style={{
          ...baseStyles,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          color: 'transparent',
          zIndex: 1,
          backgroundColor: 'transparent',
        }}
        dangerouslySetInnerHTML={{
          __html: highlightVariables(value)
        }}
      />
      
      {/* Textarea transparent par-dessus */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`modern-editor-font ${className}`}
        style={{
          ...baseStyles,
          position: 'relative',
          backgroundColor: 'transparent',
          zIndex: 2,
          resize: 'none',
          outline: 'none',
        }}
        {...props}
      />
    </div>
  )
}

export default HighlightedTextarea
