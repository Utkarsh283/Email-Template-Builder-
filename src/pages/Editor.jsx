
import React, { useRef , useState } from 'react'
import EmailEditor, {  EmailEditorProps } from 'react-email-editor';
import emailTemplate from '../assets/jsonTemplate/advertisement.json';
import template2 from '../assets/jsonTemplate/verification.json';
import empty from '../assets/jsonTemplate/empty.json';


function EmailEditorPanel() {
    const emailEditorRef = useRef(null);
    const [isPanelVisible, setIsPanelVisible] = useState(true);
  
    const loadTemplate = (templateJson) => {
      
        const unlayer = emailEditorRef.current?.editor;
        if (unlayer) {
          unlayer.loadDesign(templateJson);
        }
      
    };
  
    const downloadHtml = () => {
      const unlayer = emailEditorRef.current?.editor;
      if (unlayer) {
        unlayer.exportHtml((data) => {
          const { html } = data;
          const blob = new Blob([html], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'email-template.html';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      }
    };
  
    const templates = [
      { id: 1, name: 'New Template',  json: empty },
      { id: 2, name: 'Verification Email Template', json: template2 },
      { id: 3, name: 'Advertising Email Template', json: emailTemplate }
     

      // Add more templates if needed
    ];
  
    return (
      <div
        style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}
        className="bg-gray-200 flex"
      >
        {/* Left Panel */}
        <div
          style={{ width: isPanelVisible ? '250px' : 0 }}
          className={`transition-all duration-300 bg-gray-100 shadow-md overflow-hidden`}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Templates</h2>
            <ul className="space-y-2">
              {templates.map((template) => (
                <li
                  key={template.id}
                  className=" text-black p-2 bg-blue-100 rounded cursor-pointer hover:bg-blue-200"
                  onClick={() => 
                    {
                        loadTemplate(template.json)
                        console.log(template.json)
                    }}
                >
                  {template.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Main Editor Section */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {/* Top Bar */}
          <div className="p-4 flex justify-between items-center bg-white shadow">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsPanelVisible(!isPanelVisible)}
            >
              {isPanelVisible ? 'Hide Templates' : 'Show Templates'}
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={downloadHtml}
            >
              Download HTML
            </button>
          </div>
  
          {/* Email Editor */}
          <EmailEditor ref={emailEditorRef} style={{ height: 'calc(100vh - 80px)', overflow: 'hidden' }} />
        </div>
      </div>
  );
}

export default EmailEditorPanel


