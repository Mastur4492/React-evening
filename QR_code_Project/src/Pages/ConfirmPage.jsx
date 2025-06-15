import { useParams, Link } from 'react-router-dom';
import { getForm } from '../Utils/Storage';
import { QRCodeSVG } from 'qrcode.react';

export default function ConfirmPage() {
  const { id } = useParams();
  const data = getForm(id);

  const link = `http://192.168.0.102:5173/data/${id}`; // 👈 Tera IP address

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl mb-4">Form Submitted ✅</h2>
      <QRCodeSVG value={link} size={160} />
      <p className="mt-4">
        Scan or <Link to={`/data/${id}`} className="text-blue-600 underline">click here</Link> to view data
      </p>
    </div>
  );
}
