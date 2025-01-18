import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function OgxChart({ kdu, sltc }) {
  const kduOgxSu = 37 + kdu.ogvSu + kdu.ogtSu;
  const kduOgxApl = 4 + 1 + kdu.ogvApl + kdu.ogtApl;
  const kduOgxApd = kdu.ogvApd + kdu.ogtApd;

  const sltcOgxSu = 41 + sltc.ogvSu + sltc.ogtSu;
  const sltcOgxApl = 2 + 2 + sltc.ogvApl + sltc.ogtApl;
  const sltcOgxApd = sltc.ogvApd + sltc.ogtApd;

  const data = [
    {
      name: 'KDU',
      SU: kduOgxSu,
      APL: kduOgxApl,
      APD: kduOgxApd
      // amt: 2400,
    },
    {
      name: 'SLTC',
      SU: sltcOgxSu,
      APL: sltcOgxApl,
      APD: sltcOgxApd
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

export default OgxChart