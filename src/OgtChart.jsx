import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function OgtChart({ kdu, sltc }) {
  const kduOgtSu = kdu.ogtSu;
  const kduOgtApl = 1 + kdu.ogtApl;
  const kduOgtApd = kdu.ogtApd;

  const sltcOgtSu = sltc.ogtSu;
  const sltcOgtApl = 2 + sltc.ogtApl;
  const sltcOgtApd = sltc.ogtApd;

  const data = [
    {
      name: 'KDU',
      SU: kduOgtSu,
      APL: kduOgtApl,
      APD: kduOgtApd
      // amt: 2400,
    },
    {
      name: 'SLTC',
      SU: sltcOgtSu,
      APL: sltcOgtApl,
      APD: sltcOgtApd
      // amt: 2210,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="SU" fill="#F85A40" />
        <Bar dataKey="APL" fill="#00C16E" />
        <Bar dataKey="APD" fill="#037Ef3" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default OgtChart