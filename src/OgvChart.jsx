import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function OgvChart({ kdu, sltc }) {
  const kduOgvSu = 37 + kdu.ogvSu;
  const kduOgvApl = 4 + kdu.ogvApl;
  const kduOgvApd = kdu.ogvApd;

  const sltcOgvSu = 41 + sltc.ogvSu;
  const sltcOgvApl = 2 + sltc.ogvApl;
  const sltcOgvApd = sltc.ogvApd;

  const data = [
    {
      name: 'KDU',
      SU: kduOgvSu,
      APL: kduOgvApl,
      APD: kduOgvApd
      // amt: 2400,
    },
    {
      name: 'SLTC',
      SU: sltcOgvSu,
      APL: sltcOgvApl,
      APD: sltcOgvApd
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

export default OgvChart