/* =========================
   PROGRAMS
========================= */

.programs-wrapper {
    position: relative;
}

.programs-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 430px));
    justify-content: space-between;
    gap: 52px;
    align-items: start;
}

.program-card {
    min-height: 410px;
    padding: 34px 32px 30px;
    background: #eeeeee;
    border-radius: 32px;
    color: #000000;
    transition: background 0.2s ease, color 0.2s ease;
}

.program-card h3 {
    font-size: 18px;
    line-height: 1.05;
    font-weight: 900;
    font-style: italic;
    margin-bottom: 30px;
}

.program-card p {
    font-size: 14.6px;
    line-height: 1.12;
    font-weight: 400;
    margin-bottom: 28px;
}

.program-card strong {
    display: block;
    margin-top: 24px;
    font-size: 14.6px;
    line-height: 1.08;
    font-weight: 900;
}

.program-card.active {
    color: #ffffff;
}

.program-card.green {
    background: #198b08;
}

.program-card.pink {
    background: #e7005a;
}

.program-card.blue {
    background: #003bd8;
}

/* =========================
   MÉTRIQUES SOUS LE BLOC SURVOLÉ
========================= */

.program-metrics {
    position: relative;
    grid-row: 2;
    width: 330px;
    margin-top: -1px;
    margin-left: 58px;
    padding-left: 38px;
    color: #000000;
}

.program-metrics .metric-line {
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5px;
    height: 230px;
    background: #000000;
}

.program-metrics .metric-pin {
    position: absolute;
    top: -8px;
    left: -6px;
    width: 14px;
    height: 14px;
    background: #000000;
    border-radius: 50%;
}

.metric-item {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 24px;
    align-items: start;
    margin-bottom: 26px;
}

.metric-item:last-child {
    margin-bottom: 0;
}

.metric-text h4 {
    font-size: 18px;
    line-height: 1;
    font-weight: 900;
    margin-bottom: 8px;
}

.metric-text p {
    width: 230px;
    font-size: 7.6px;
    line-height: 1.15;
    font-weight: 400;
}

.metric-dots {
    display: flex;
    gap: 5px;
    padding-top: 2px;
}

.metric-dot {
    width: 11px;
    height: 11px;
    border: 1.6px solid #000000;
    border-radius: 50%;
    background: #ffffff;
}

.program-metrics.green .metric-dot.active {
    background: #198b08;
}

.program-metrics.pink .metric-dot.active {
    background: #e7005a;
}

.program-metrics.blue .metric-dot.active {
    background: #003bd8;
}
