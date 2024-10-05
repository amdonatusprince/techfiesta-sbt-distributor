'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const EmailEditor = ({ setEmailContent, setEmailSubject }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1' }],
      ['bold', 'italic'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic',
    'list', 'bullet',
    'link'
  ];

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="emailSubject" className="block text-sm font-medium text-gray-700">Email Subject</label>
        <input
          type="text"
          id="emailSubject"
          onChange={(e) => setEmailSubject(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 border border-gray-300"
          placeholder="Enter email subject"
        />
      </div>
      <div>
        <label htmlFor="emailContent" className="block text-sm font-medium text-gray-700">Email Content</label>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={setEmailContent}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Compose your email here..."
        />
      </div>
    </div>
  );
};

export default EmailEditor;
