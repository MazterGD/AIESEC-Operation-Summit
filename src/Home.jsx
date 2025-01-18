import React from 'react';
import OgxChart from './OgxChart';
import OgvChart from './OgvChart';
import OgtChart from './OgtChart';
import Timer from './Timer';

function Home() {
  const kdu = {
    ogvSu: 0,
    ogvApl: 0,
    ogvApd: 0,
    ogtSu: 0,
    ogtApl: 0,
    ogtApd: 0,
  };

  const sltc = {
    ogvSu: 0,
    ogvApl: 0,
    ogvApd: 0,
    ogtSu: 0,
    ogtApl: 0,
    ogtApd: 0,
  };

  const kduPoints = 235 + (kdu.ogvSu + kdu.ogtSu) * 0 + (kdu.ogvApl + kdu.ogtApl) * 20 + (kdu.ogvApd + kdu.ogtApd) * 60;
  const sltcPoints = 245 + (sltc.ogvSu + sltc.ogtSu) * 0 + (sltc.ogvApl + sltc.ogtApl) * 20 + (sltc.ogvApd + sltc.ogtApd) * 60;

  const isKduHigher = kduPoints > sltcPoints;
  const isSltcHigher = sltcPoints > kduPoints;

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>DASHBOARD</h1>
        <Timer initialTime={18000} />
        <h3>Total Performance</h3>
      </div>

      <div className="card-chart-container">
        <div className="main-cards">
          <div
            className={`card ${isKduHigher ? 'highlight' : ''}`}
          >
            <div className="card-inner">
              <h3>KDU</h3>
              <img src=".\src\assets\KDU logo.png" width={100} alt="KDU logo" />
            </div>
            <h1>{kduPoints}</h1>
          </div>
          <div
            className={`card ${isSltcHigher ? 'highlight' : ''}`}
          >
            <div className="card-inner">
              <h3>SLTC</h3>
              <img src=".\src\assets\SLTC logo.png" width={100} alt="SLTC logo" />
            </div>
            <h1>{sltcPoints}</h1>
          </div>
        </div>
        <div className="chart-container">
          <OgxChart kdu={kdu} sltc={sltc} />
        </div>
      </div>

      <div className="main-title">
        <h3>oGV Performance</h3>
        <h3>oGT Performance</h3>
      </div>

      <div className="charts">
        <OgvChart kdu={kdu} sltc={sltc} />
        <OgtChart kdu={kdu} sltc={sltc} />
      </div>
    </main>
  );
}

export default Home;
