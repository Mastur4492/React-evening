import React from 'react';
import { useParams } from 'react-router-dom';
import { getForm } from '../Utils/Storage';

export default function DataPage() {
  const { id } = useParams();      
  const data = getForm(id);        

  if (!data) {
    return <p className="p-6 text-red-500">❌ No data found for this ID.</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">📋 Submitted Data</h2>

      <table className="w-full border text-left">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <th className="border px-2 py-1 bg-gray-100 capitalize">{key}</th>
              <td className="border px-2 py-1">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
