import React, { useState, useRef, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea.jsx'

const VariableDetector = ({ value, onChange, placeholder, className, style, rows }) => {
  const textareaRef = useRef(null)
  const [detectedVariables, setDetectedVariables] = useState([])

  // Fonction pour détecter les variables dans le texte
  const detectVariables = (text) => {
    if (!text) return []
    
    const variableRegex = /<<([^>]+)>>/g
    const variables = []
    let match
    
    while ((match = variableRegex.exec(text)) !== null) {
      variables.push({
        name: match[1],
        fullMatch: match[0],
        start: match.index,
        end: match.index + match[0].length
      })
    }
    
    return variables
  }

  // Mettre à jour les variables détectées quand le texte change
  useEffect(() => {
    const variables = detectVariables(value)
    setDetectedVariables(variables)
  }, [value])

  // Fonction pour naviguer vers une variable dans le textarea
  const jumpToVariable = (variable) => {
    if (textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.setSelectionRange(variable.start, variable.end)
    }
  }

  return (
    <div className="flex gap-4">
      {/* Textarea principal */}
      <div className="flex-1">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${className} font-inter`}
          style={style}
          rows={rows}
        />
      </div>

      {/* Panneau de détection des variables */}
      <div className="w-64 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <h3 className="font-semibold text-blue-800 text-sm">Variables détectées</h3>
        </div>

        {detectedVariables.length > 0 ? (
          <>
            <div className="text-xs text-blue-600 mb-3 font-medium">
              {detectedVariables.length} variable{detectedVariables.length > 1 ? 's' : ''} trouvée{detectedVariables.length > 1 ? 's' : ''}
            </div>
            
            <div className="space-y-2">
              {detectedVariables.map((variable, index) => (
                <button
                  key={index}
                  onClick={() => jumpToVariable(variable)}
                  className="w-full text-left p-2 bg-white border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <code className="text-sm font-mono text-blue-700 group-hover:text-blue-800">
                      {variable.fullMatch}
                    </code>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 ml-4">
                    Position {variable.start}-{variable.end}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 p-2 bg-green-50 border border-green-200 rounded-md">
              <div className="text-xs text-green-700 font-medium">
                💡 Cliquez sur une variable pour la sélectionner dans le texte
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-gray-400 text-sm mb-2">🔍</div>
            <div className="text-xs text-gray-500">
              Aucune variable détectée
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Format: &lt;&lt;NomVariable&gt;&gt;
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VariableDetector
