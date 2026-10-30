// ==============================================================================
// CL01 LECTURE SLIDE DECK ENGINE & DATA
// Course: Air Transport Systems - CL01 | ITC Learning Hub
// Department of Transportation Engineering · Institute of Technology of Cambodia
// ==============================================================================

export interface CL01Slide {
  id: number;
  topicBadge: string;
  topicCode: string;
  title: string;
  subtitle: string;
  htmlContent: string;
  speakerNotes: string;
  category: 'Fundamentals' | 'History' | 'Systems' | 'Classification' | 'Governance' | 'Cambodia' | 'Summary';
}

export const CL01_SLIDES_DATA: CL01Slide[] = [
  // Slide 1
  {
    id: 1,
    topicBadge: "COURSE OVERVIEW · ITC",
    topicCode: "CL01",
    title: "Introduction to Air Transportation",
    subtitle: "Foundations of Civil Aviation Systems, Operational Economics, Infrastructure & Global Regulatory Architecture",
    category: "Fundamentals",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:18px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #0056d2;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:11px;font-weight:800;background:#eff6ff;color:#0056d2;padding:3px 8px;border-radius:4px;">ACADEMIC CONTEXT</span>
            </div>
            <h4 style="margin:0 0 6px;font-size:16px;color:#0f172a;font-weight:800;">Department of Transportation Engineering</h4>
            <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;">
              Institute of Technology of Cambodia (ITC) · Civil Engineering Faculty<br>
              <b>Course:</b> Air Transport Planning and Management (CL01–CL08 Series)<br>
              <b>Target Audience:</b> Year 4 Transportation Engineering Undergraduates
            </p>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #10b981;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:11px;font-weight:800;background:#ecfdf5;color:#059669;padding:3px 8px;border-radius:4px;">CURRICULUM ARCHITECTURE</span>
            </div>
            <h4 style="margin:0 0 6px;font-size:16px;color:#0f172a;font-weight:800;">6 Core Instructional Pillars</h4>
            <ul style="margin:0;padding-left:18px;font-size:12.5px;color:#475569;line-height:1.65;">
              <li><b>1.1</b> Fundamentals, Physics of Speed & Modal Economics</li>
              <li><b>1.2</b> Aviation History, Technology & US Deregulation (1978)</li>
              <li><b>1.3</b> 4 System Components & Aerodrome Zoning (Airside/Landside)</li>
              <li><b>1.4</b> Industry Classification: Commercial, Cargo & General Aviation</li>
              <li><b>1.5</b> ICAO SARPs, IATA Clearinghouse & The 9 Freedoms of the Air</li>
              <li><b>1.6</b> Cambodia Aviation Master Plan: Techo KTI 4F & Siem Reap SAI</li>
            </ul>
          </div>
        </div>

        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div style="font-size:13px;color:#1e3a8a;line-height:1.5;">
            <b>Core Learning Purpose:</b> Master the engineering, regulatory, and spatial principles governing modern civil aviation before studying econometric forecasting (CL02) and runway airfield design (CL03).
          </div>
          <span style="font-size:12px;font-weight:800;background:#0056d2;color:#ffffff;padding:5px 12px;border-radius:6px;">
            14 High-Impact Slides
          </span>
        </div>
      </div>
    `,
    speakerNotes: "Welcome students to Module CL01. Introduce air transportation not merely as aircraft flight, but as an interconnected global socio-technical system. Emphasize that civil engineers design the runways, taxiways, passenger terminals, and drainage systems that make modern aviation possible."
  },

  // Slide 2
  {
    id: 2,
    topicBadge: "GLOBAL MACROECONOMICS",
    topicCode: "1.0",
    title: "The Global Air Transport Socio-Technical Ecosystem",
    subtitle: "Macroeconomic footprint, value-to-weight asymmetry paradox, and economic catalysts",
    category: "Fundamentals",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:16px;height:100%;justify-content:center;">
        <!-- 4 KPI Metrics Cards -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;">
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;">Global Economic Impact</div>
            <div style="font-size:28px;font-weight:850;color:#0056d2;margin:4px 0;">$3.5 Trillion</div>
            <div style="font-size:12px;color:#475569;">3.5% of world GDP generated directly, indirectly, and through tourism multipliers.</div>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;">Employment Footprint</div>
            <div style="font-size:28px;font-weight:850;color:#0284c7;margin:4px 0;">87.7 Million</div>
            <div style="font-size:12px;color:#475569;">High-skill jobs across airlines, aerodromes, civil engineering, ANSPs & logistics.</div>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;">World Trade Value Share</div>
            <div style="font-size:28px;font-weight:850;color:#16a34a;margin:4px 0;">35% of Trade</div>
            <div style="font-size:12px;color:#475569;">$6.8 Trillion worth of goods transported annually across international borders.</div>
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;">Physical Tonnage Share</div>
            <div style="font-size:28px;font-weight:850;color:#d97706;margin:4px 0;">&lt; 1% Tonnage</div>
            <div style="font-size:12px;color:#475569;">The Value-to-Weight Paradox: Extreme economic density (microchips, pharma, gold).</div>
          </div>
        </div>

        <!-- 5 Core Stakeholders Flow -->
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;">
          <div style="font-size:12px;font-weight:800;color:#0f172a;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.04em;">
            The 5 System Stakeholder Groups
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;font-size:12px;">
            <div style="background:#ffffff;border:1px solid #cbd5e1;padding:10px;border-radius:8px;">
              <b style="color:#0056d2;display:block;">1. Regulators</b>
              <span>ICAO, State CAAs (SSCA), EASA, FAA enforcing safety & air law.</span>
            </div>
            <div style="background:#ffffff;border:1px solid #cbd5e1;padding:10px;border-radius:8px;">
              <b style="color:#0284c7;display:block;">2. Airlines</b>
              <span>Commercial route operators, fleet managers, passenger/cargo carriers.</span>
            </div>
            <div style="background:#ffffff;border:1px solid #cbd5e1;padding:10px;border-radius:8px;">
              <b style="color:#16a34a;display:block;">3. Aerodromes</b>
              <span>Airport authorities, concessionaires, ramp handlers, fueling & ARFF.</span>
            </div>
            <div style="background:#ffffff;border:1px solid #cbd5e1;padding:10px;border-radius:8px;">
              <b style="color:#7c3aed;display:block;">4. ANSPs (ATM)</b>
              <span>Air navigation service providers, radar controllers, tower & ACC.</span>
            </div>
            <div style="background:#ffffff;border:1px solid #cbd5e1;padding:10px;border-radius:8px;">
              <b style="color:#d97706;display:block;">5. Customers</b>
              <span>Business travelers, tourists, air freight forwarders, supply chains.</span>
            </div>
          </div>
        </div>
      </div>
    `,
    speakerNotes: "Highlight the 'Value-to-Weight Paradox': While ships carry >80% of world freight tonnage, air cargo carries 35% of total value. Why? High-value electronics, pharmaceuticals, perishable fresh goods, and emergency aerospace parts require speed over bulk."
  },

  // Slide 3
  {
    id: 3,
    topicBadge: "TOPIC 1.1 · FUNDAMENTALS",
    topicCode: "1.1",
    title: "Definition, Operational Physics & Modal Competition",
    subtitle: "Cruising velocities, node-based infrastructure, and the High-Speed Rail (HSR) distance curve",
    category: "Fundamentals",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <!-- Distinct Operational Strengths -->
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;">
            <b style="color:#0056d2;font-size:14px;display:flex;align-items:center;gap:6px;margin-bottom:8px;">
              <span>Operational Characteristics</span>
            </b>
            <ul style="margin:0;padding-left:18px;font-size:12.5px;color:#334155;line-height:1.65;">
              <li><b>Extreme Velocity:</b> Cruising speeds between 820–930 km/h (Mach 0.78–0.85) for modern jet airliners.</li>
              <li><b>Node-Based Infrastructure:</b> Requires capital investment only at origin and destination endpoints—zero continuous ground corridor needed.</li>
              <li><b>Geographic Transcendence:</b> Easily navigates mountain ranges, archipelagos, water barriers, and landlocked terrain.</li>
              <li><b>Capital Intensity:</b> High vehicle cost ($100M+ per narrowbody, $300M+ per widebody) and high fuel cost sensitivity (25–35% of OPEX).</li>
            </ul>
          </div>

          <!-- Modal Competition Thresholds -->
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px;">
            <b style="color:#0f172a;font-size:14px;display:flex;align-items:center;gap:6px;margin-bottom:8px;">
              <span>High-Speed Rail (HSR) vs. Air Travel</span>
            </b>
            <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
              <div style="background:#fee2e2;border:1px solid #fca5a5;padding:8px 12px;border-radius:6px;color:#991b1b;">
                <b>&lt; 400 km: HSR Strongly Dominates</b><br>
                Zero airport transit delay, city-center to city-center boarding. Air travel is inefficient due to climb/descent & ground dwell.
              </div>
              <div style="background:#fef3c7;border:1px solid #fde68a;padding:8px 12px;border-radius:6px;color:#92400e;">
                <b>400 – 800 km: Parity / Fierce Competition</b><br>
                Total door-to-door transit times converge (~3 to 4 hours). Pricing and flight frequency determine market share.
              </div>
              <div style="background:#dcfce7;border:1px solid #86efac;padding:8px 12px;border-radius:6px;color:#166534;">
                <b>&gt; 800–1,000 km: Air Transport Dominates</b><br>
                Jet velocity completely outstrips ground modes; sole viable commercial option across maritime straits.
              </div>
            </div>
          </div>
        </div>

        <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;padding:12px 16px;font-size:12.5px;color:#475569;display:flex;justify-content:space-between;align-items:center;">
          <span><b>Key takeaway:</b> Civil engineers must design airports as multimodal hubs where high-speed rail, highways, and jet runways interconnect seamlessly.</span>
          <span style="font-weight:800;color:#0056d2;background:#eff6ff;padding:3px 8px;border-radius:4px;">DOOR-TO-DOOR EFFICIENCY</span>
        </div>
      </div>
    `,
    speakerNotes: "Discuss door-to-door travel time. For Phnom Penh to Siem Reap (approx 315 km), discuss how highway improvements vs regional flights compete. For international routes over 800 km (e.g. Phnom Penh to Singapore or Tokyo), aviation is the only viable passenger mode."
  },

  // Slide 4
  {
    id: 4,
    topicBadge: "TOPIC 1.1 · QUANTITATIVE METRICS",
    topicCode: "1.1",
    title: "Aviation Mathematics: Operational Capacity & Yield Metrics",
    subtitle: "Essential equations: ASK, RPK, PLF, CASK, RASK, and Breakeven Load Factor",
    category: "Fundamentals",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <!-- Core Equations -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;padding:16px;">
            <b style="color:#0056d2;font-size:13.5px;display:block;margin-bottom:8px;">Core Quantitative Formulas</b>
            <div style="font-family:monospace;font-size:12px;background:#f8fafc;padding:8px 10px;border-radius:6px;border-left:3px solid #0056d2;margin-bottom:6px;">
              <b>ASK</b> = Available Seats × Flight Distance (km)
            </div>
            <div style="font-family:monospace;font-size:12px;background:#f8fafc;padding:8px 10px;border-radius:6px;border-left:3px solid #0284c7;margin-bottom:6px;">
              <b>RPK</b> = Paying Passengers × Flight Distance (km)
            </div>
            <div style="font-family:monospace;font-size:12px;background:#f8fafc;padding:8px 10px;border-radius:6px;border-left:3px solid #16a34a;margin-bottom:6px;">
              <b>PLF</b> = ( RPK / ASK ) × 100%
            </div>
            <div style="font-family:monospace;font-size:12px;background:#f8fafc;padding:8px 10px;border-radius:6px;border-left:3px solid #d97706;">
              <b>Breakeven PLF</b> = CASK / Passenger Yield
            </div>
          </div>

          <!-- Worked Numerical Example Box -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:16px;">
            <b style="color:#1e3a8a;font-size:13.5px;display:block;margin-bottom:8px;">Worked Engineering Example: PNH → BKK</b>
            <div style="font-size:12.5px;color:#1e3a8a;line-height:1.6;">
              <b>Flight:</b> Airbus A320 · Phnom Penh (PNH) to Bangkok (BKK)<br>
              <b>Flight Distance:</b> 503 km · <b>Total Aircraft Capacity:</b> 180 seats<br>
              <b>Realized Onboard Traffic:</b> 153 paying passengers<br>
              <hr style="border:none;border-top:1px solid #bfdbfe;margin:8px 0;">
              • <b>ASK:</b> 180 seats × 503 km = <b>90,540 Seat-km</b><br>
              • <b>RPK:</b> 153 pax × 503 km = <b>76,959 Pax-km</b><br>
              • <b>PLF:</b> 76,959 / 90,540 = <b>85.0% Load Factor</b>
            </div>
          </div>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12.5px;">
          <span><b>Economic Reality:</b> Airline seats are ultra-perishable inventory. An unsold seat on pushback produces 0 revenue but full operating cost.</span>
          <span style="font-weight:700;color:#0056d2;background:#eff6ff;padding:3px 8px;border-radius:4px;">UNIT COST vs REVENUE</span>
        </div>
      </div>
    `,
    speakerNotes: "Make sure students understand that ASK represents supply (capacity produced), while RPK represents demand (capacity sold). If an airline flies empty seats, the ASK is consumed and lost forever—airline capacity is a highly perishable commodity."
  },

  // Slide 5
  {
    id: 5,
    topicBadge: "TOPIC 1.2 · HISTORY & EVOLUTION",
    topicCode: "1.2",
    title: "Technological Milestones & Evolutionary Leaps",
    subtitle: "From the Wright Brothers and the Douglas DC-3 to Jet Age deregulation and carbon twinjets",
    category: "History",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:12px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;">
          <!-- 1903 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#0056d2;background:#eff6ff;padding:2px 6px;border-radius:4px;">1903</span>
              <span style="font-size:11px;color:#64748b;">Kitty Hawk</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#0f172a;">Wright Flyer</h5>
            <p style="margin:0;font-size:11.5px;color:#475569;line-height:1.45;">First controlled, powered heavier-than-air flight (12s, 36.5m).</p>
          </div>

          <!-- 1936 -->
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#15803d;background:#dcfce7;padding:2px 6px;border-radius:4px;">1936</span>
              <span style="font-size:11px;color:#166534;font-weight:700;">Profitable Pax</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#14532d;">The Douglas DC-3</h5>
            <p style="margin:0;font-size:11.5px;color:#166534;line-height:1.45;">First airliner profitable carrying passengers alone without airmail subsidies.</p>
          </div>

          <!-- 1944 -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#1d4ed8;background:#dbeafe;padding:2px 6px;border-radius:4px;">1944</span>
              <span style="font-size:11px;color:#1e40af;font-weight:700;">Chicago Convention</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#1e3a8a;">Sovereign Airspace</h5>
            <p style="margin:0;font-size:11.5px;color:#1e40af;line-height:1.45;">Established sovereign state airspace, codified Freedoms of the Air, founded ICAO.</p>
          </div>

          <!-- 1958 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#0056d2;background:#eff6ff;padding:2px 6px;border-radius:4px;">1958</span>
              <span style="font-size:11px;color:#64748b;">Jet Revolution</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#0f172a;">Boeing 707 & DC-8</h5>
            <p style="margin:0;font-size:11.5px;color:#475569;line-height:1.45;">Cruise speeds doubled to 550 mph; transatlantic flight time cut from 14h to 7h.</p>
          </div>

          <!-- 1978 -->
          <div style="background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#b45309;background:#fef3c7;padding:2px 6px;border-radius:4px;">1978</span>
              <span style="font-size:11px;color:#92400e;font-weight:700;">Market Competition</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#78350f;">US Deregulation Act</h5>
            <p style="margin:0;font-size:11.5px;color:#92400e;line-height:1.45;">Phased out government route & fare controls; stimulated Hub-and-Spoke & LCCs.</p>
          </div>

          <!-- 21st Cent -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:800;color:#0056d2;background:#eff6ff;padding:2px 6px;border-radius:4px;">Modern Era</span>
              <span style="font-size:11px;color:#64748b;">High Efficiency</span>
            </div>
            <h5 style="margin:4px 0 2px;font-size:13px;color:#0f172a;">B787 / A350 Twinjets</h5>
            <p style="margin:0;font-size:11.5px;color:#475569;line-height:1.45;">50%+ carbon composite structures, high-bypass geared turbofans, 25% lower fuel burn.</p>
          </div>
        </div>
      </div>
    `,
    speakerNotes: "Highlight the Douglas DC-3. Before 1936, airlines depended on airmail government contracts to avoid bankruptcy. The DC-3 had low operating costs and high speed that enabled pure passenger profitability."
  },

  // Slide 6
  {
    id: 6,
    topicBadge: "TOPIC 1.3 · SYSTEM COMPONENTS",
    topicCode: "1.3",
    title: "The Four Core System Components",
    subtitle: "Aircraft fleets, aerodromes, air navigation service providers, and airline operators",
    category: "Systems",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;">
          <!-- Pillar 1 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #0056d2;border-radius:10px;padding:16px;">
            <h4 style="margin:0 0 6px;font-size:15px;color:#0f172a;">1. Aircraft (The Vehicles)</h4>
            <p style="margin:0;font-size:12.5px;color:#475569;line-height:1.55;">
              Certified airframes, turbofan/turboprop propulsion. Governed by weight limits: <b>MTOW</b> (Max Takeoff Weight), <b>MZFW</b> (Zero Fuel Weight), <b>OEW</b> (Operating Empty Weight). Payload-range curves dictate route feasibility.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #0284c7;border-radius:10px;padding:16px;">
            <h4 style="margin:0 0 6px;font-size:15px;color:#0f172a;">2. Aerodromes (The Nodes)</h4>
            <p style="margin:0;font-size:12.5px;color:#475569;line-height:1.55;">
              Heavy civil engineering infrastructure: runways, taxiways, aprons, de-icing stands, and passenger terminals. Structured strictly into <b>Airside</b> (movement area) and <b>Landside</b> (commercial/concourse).
            </p>
          </div>

          <!-- Pillar 3 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #16a34a;border-radius:10px;padding:16px;">
            <h4 style="margin:0 0 6px;font-size:15px;color:#0f172a;">3. ANSPs / ATM (Corridors)</h4>
            <p style="margin:0;font-size:12.5px;color:#475569;line-height:1.55;">
              Air Traffic Management: Control Tower (TWR), Terminal Radar Approach (TRACON/APP), and Area Control Centers (ACC). Enforces lateral, longitudinal, and vertical separation minimums (RVSM).
            </p>
          </div>

          <!-- Pillar 4 -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #d97706;border-radius:10px;padding:16px;">
            <h4 style="margin:0 0 6px;font-size:15px;color:#0f172a;">4. Commercial Management</h4>
            <p style="margin:0;font-size:12.5px;color:#475569;line-height:1.55;">
              Airlines, ground handlers, catering kitchens, aircraft maintenance repair organizations (MRO), and airport concessionaires that monetize non-aeronautical passenger footfall.
            </p>
          </div>
        </div>

        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:12px 16px;font-size:12px;color:#334155;">
          <b>Systemic Dependency:</b> If any single component experiences a bottleneck (e.g. taxiway congestion or radar outage), the entire network throughput degrades across hundreds of connecting flights.
        </div>
      </div>
    `,
    speakerNotes: "Notice that if any single pillar fails, the entire system stops. For example, if the ANSP radar experiences an outage or an aerodrome runway lacks drainage, aircraft cannot operate regardless of how advanced the fleet is."
  },

  // Slide 7
  {
    id: 7,
    topicBadge: "TOPIC 1.3 · AERODROME ANATOMY",
    topicCode: "1.3",
    title: "Aerodrome Spatial Architecture: Airside vs. Landside",
    subtitle: "Strict physical zoning governed by ICAO Annex 14 (Safety) & Annex 17 (Security)",
    category: "Systems",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <!-- Airside -->
          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <b style="color:#0056d2;font-size:14px;">AIRSIDE (Restricted Movement Area)</b>
              <span style="font-size:10px;font-weight:800;background:#0056d2;color:#fff;padding:2px 6px;border-radius:4px;">ICAO ANNEX 14</span>
            </div>
            <ul style="margin:0;padding-left:18px;font-size:12px;color:#1e3a8a;line-height:1.65;">
              <li><b>Runways:</b> Pavement thickness (PCN), friction surface, orientation (wind coverage ≥95%), approach lighting (PAPI, ALS).</li>
              <li><b>Taxiways & RETs:</b> Rapid Exit Taxiways allowing turnoffs at 93 km/h to maximize runway slot throughput.</li>
              <li><b>Aprons & Stands:</b> Contact gates with Passenger Boarding Bridges (PBB) vs remote apron busing stands.</li>
              <li><b>Air Traffic Control Tower:</b> Elevated 360° visual view of all runways & taxiway intersections.</li>
              <li><b>ARFF Fire Stations:</b> Response within 2 to 3 minutes to any runway threshold.</li>
            </ul>
          </div>

          <!-- Landside -->
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <b style="color:#15803d;font-size:14px;">LANDSIDE (Public & Passenger Processing)</b>
              <span style="font-size:10px;font-weight:800;background:#16a34a;color:#fff;padding:2px 6px;border-radius:4px;">ICAO ANNEX 9 & 17</span>
            </div>
            <ul style="margin:0;padding-left:18px;font-size:12px;color:#14532d;line-height:1.65;">
              <li><b>Ticketing & Check-in:</b> Linear vs island check-in desks, automated baggage drop (BD) machines.</li>
              <li><b>Security & Emigration:</b> Sterile zone checkpoint, X-ray scanners, body scanners, biometric gates.</li>
              <li><b>Commercial Concourse:</b> Retail shops, food & beverage, duty-free shopping, airline lounges.</li>
              <li><b>Curbside Intermodal Hub:</b> Departures/arrivals roadway drop-off, short-stay parking, express rail links, public buses.</li>
            </ul>
          </div>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px 14px;font-size:12px;color:#475569;display:flex;align-items:center;justify-content:space-between;">
          <span><b>Sterile Boundary Line:</b> Strict physical access control, FOD (Foreign Object Debris) barriers, and perimeter intrusion detection.</span>
          <span style="font-weight:700;color:#0056d2;">SECURITY STERILITY</span>
        </div>
      </div>
    `,
    speakerNotes: "Civil engineers must strictly maintain the sterile boundary between airside and landside. Airside operations require specialized security badges, vehicle permits, and foreign object debris (FOD) management."
  },

  // Slide 8
  {
    id: 8,
    topicBadge: "TOPIC 1.4 · CLASSIFICATION",
    topicCode: "1.4",
    title: "Civil Aviation Classification & Operational Segments",
    subtitle: "Commercial passenger transport, air cargo logistics, and general aviation",
    category: "Classification",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">
          <!-- Commercial Scheduled -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #0056d2;border-radius:10px;padding:16px;">
            <b style="color:#0056d2;font-size:14px;display:block;margin-bottom:6px;">1. Commercial Scheduled Passenger</b>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              Operates under published timetables regardless of passenger load. Divided into Full-Service Carriers (FSC) and Low-Cost Carriers (LCC), plus regional feeders.
            </p>
          </div>

          <!-- Air Cargo -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #16a34a;border-radius:10px;padding:16px;">
            <b style="color:#16a34a;font-size:14px;display:block;margin-bottom:6px;">2. Air Cargo Logistics</b>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              • <b>Passenger Belly Holds:</b> >50% of global air cargo tonnage flies beneath passenger cabins!<br>
              • <b>Dedicated Freighters:</b> B747-8F, B777F, A350F.<br>
              • <b>Express Integrators:</b> FedEx, UPS, DHL overnight hubs.
            </p>
          </div>

          <!-- General Aviation -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #d97706;border-radius:10px;padding:16px;">
            <b style="color:#d97706;font-size:14px;display:block;margin-bottom:6px;">3. General Aviation (GA)</b>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              All civil operations other than scheduled commercial transport: Corporate business jets, flight training academies, emergency medevac air ambulances, and aerial surveying.
            </p>
          </div>
        </div>

        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 16px;font-size:12.5px;color:#1e3a8a;">
          <b>Engineering Relevance:</b> General aviation requires separate Fixed-Base Operators (FBOs) and dedicated apron stands so small propeller aircraft do not obstruct heavy jet movements.
        </div>
      </div>
    `,
    speakerNotes: "Remind students of Question 8 in the quiz: More than 50% of international air cargo is carried in the belly holds of scheduled passenger aircraft. This provides critical auxiliary revenue for airlines."
  },

  // Slide 9
  {
    id: 9,
    topicBadge: "TOPIC 1.4 · AIRLINE STRATEGY",
    topicCode: "1.4",
    title: "Airline Business Models: FSC vs. LCC",
    subtitle: "Comparative economics: Hub-and-Spoke networks vs. point-to-point fleet commonality",
    category: "Classification",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:12px;height:100%;justify-content:center;">
        <div style="overflow-x:auto;">
          <table class="custom-table" style="font-size:12px;">
            <thead>
              <tr>
                <th style="width:20%;">Operational Parameter</th>
                <th style="width:40%;color:#0056d2;">Full-Service Carrier (FSC)</th>
                <th style="width:40%;color:#16a34a;">Low-Cost Carrier (LCC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Route Network Topology</b></td>
                <td><b>Hub-and-Spoke:</b> Waves of inbound flights connect to outbound flights via centralized primary megahub.</td>
                <td><b>Point-to-Point:</b> Non-stop direct city pairs, avoiding congested primary hubs.</td>
              </tr>
              <tr>
                <td><b>Fleet Composition</b></td>
                <td><b>Mixed Fleet:</b> Multiple aircraft families (widebody B777/A350 + narrowbody A320/B737) to serve varying stage lengths.</td>
                <td><b>Single Family:</b> 100% standardized fleet (e.g. all Airbus A320 or Boeing 737) minimizing parts & crew training costs.</td>
              </tr>
              <tr>
                <td><b>Gate Turnaround Time</b></td>
                <td><b>45 – 90 minutes</b> (Complex baggage transfers, multi-cabin meal service loading).</td>
                <td><b>25 – 30 minutes</b> (Rapid deplaning/boarding to maximize block hours flown).</td>
              </tr>
              <tr>
                <td><b>Daily Aircraft Utilization</b></td>
                <td>8 – 9 block hours / day</td>
                <td><b>11 – 13 block hours / day</b> (High productivity per capital asset).</td>
              </tr>
              <tr>
                <td><b>Pricing & Revenue</b></td>
                <td><b>Bundled Pricing:</b> Ticket includes checked luggage, inflight meals, and frequent flyer miles.</td>
                <td><b>Unbundled Ancillary:</b> Low baseline fare + fees for seat selection, bags, meals, priority boarding.</td>
              </tr>
              <tr>
                <td><b>Regional Examples</b></td>
                <td>Singapore Airlines, Qatar Airways, Vietnam Airlines, Thai Airways</td>
                <td>AirAsia Cambodia, VietJet Air, Scoot, Lion Air</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    speakerNotes: "Why does fleet commonality matter so much to LCCs like AirAsia? A single aircraft type (e.g., A320) means every pilot can fly every plane, mechanics only need one type rating, and spare parts inventory is minimized."
  },

  // Slide 10
  {
    id: 10,
    topicBadge: "TOPIC 1.5 · GOVERNANCE & AIR LAW",
    topicCode: "1.5",
    title: "Global Regulatory Institutions & Governance Hierarchy",
    subtitle: "The jurisdictional triangle: ICAO, IATA, and National Civil Aviation Authorities (CAAs)",
    category: "Governance",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;">
          <!-- ICAO -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-top:4px solid #0056d2;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#0056d2;font-size:15px;">ICAO</b>
              <span style="font-size:10.5px;font-weight:800;background:#eff6ff;color:#0056d2;padding:2px 6px;border-radius:4px;">UN AGENCY</span>
            </div>
            <div style="font-size:12px;color:#334155;line-height:1.6;">
              • <b>Founded:</b> 1944 Chicago Convention (Montreal, 193 Member States).<br>
              • <b>Mandate:</b> Sets global <b>Standards and Recommended Practices (SARPs)</b> across 19 technical Annexes.<br>
              • <b>Annex 14:</b> Aerodrome Design & Operations.<br>
              • <b>Annex 17:</b> Aviation Security (AVSEC).<br>
              • <b>Annex 19:</b> Safety Management Systems (SMS).
            </div>
          </div>

          <!-- IATA -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-top:4px solid #16a34a;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#16a34a;font-size:15px;">IATA</b>
              <span style="font-size:10.5px;font-weight:800;background:#ecfdf5;color:#16a34a;padding:2px 6px;border-radius:4px;">TRADE ASSOCIATION</span>
            </div>
            <div style="font-size:12px;color:#334155;line-height:1.6;">
              • <b>Private Trade Body:</b> Represents ~320 commercial airlines (~83% of world traffic).<br>
              • <b>Financial Clearinghouse:</b> Billing & Settlement Plan (BSP) handling $400B+ annually.<br>
              • <b>Coding Standards:</b> Assigns 3-letter airport codes (PNH, SAI, KTI) & 2-letter airline codes (K6, AK).<br>
              • <b>Safety Audits:</b> IOSA certification.
            </div>
          </div>

          <!-- CAA / SSCA -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-top:4px solid #d97706;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#d97706;font-size:15px;">SSCA (Cambodia CAA)</b>
              <span style="font-size:10.5px;font-weight:800;background:#fef3c7;color:#b45309;padding:2px 6px;border-radius:4px;">SOVEREIGN REGULATOR</span>
            </div>
            <div style="font-size:12px;color:#334155;line-height:1.6;">
              • <b>State Secretariat of Civil Aviation:</b> Holds sovereign regulatory authority in Cambodia.<br>
              • <b>Certifications:</b> Issues Air Operator Certificates (AOC) and Aerodrome Operating Certificates.<br>
              • <b>Enforcement:</b> Audits runway safety, personnel licensing (pilots, ATCs), and national civil aviation security.
            </div>
          </div>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px 14px;font-size:12px;color:#475569;">
          <b>Legal Principle:</b> ICAO standards do not have direct sovereign power over citizens; sovereign member states transpose ICAO SARPs into national civil aviation laws.
        </div>
      </div>
    `,
    speakerNotes: "Clarify the common misconception: ICAO is not an airline association, nor does it control flights directly. It is a UN intergovernmental body that establishes global standards that member sovereign nations adopt into national law."
  },

  // Slide 11
  {
    id: 11,
    topicBadge: "TOPIC 1.5 · AIR LAW",
    topicCode: "1.5",
    title: "The 9 Freedoms of the Air",
    subtitle: "Commercial aviation rights codified under the 1944 Chicago Convention framework",
    category: "Governance",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:10px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:8px;font-size:11.5px;">
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#0056d2;">1st Freedom (Overflight):</b> Right to fly across foreign airspace without landing.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#0056d2;">2nd Freedom (Technical Stop):</b> Right to land for refueling or maintenance without boarding passengers.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#16a34a;">3rd Freedom:</b> Right to put down passengers from home state into a foreign state.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#16a34a;">4th Freedom:</b> Right to pick up passengers in a foreign state destined for home state.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#d97706;">5th Freedom:</b> Right to carry passengers between two foreign states on a flight originating/ending at home (e.g. SIA flying Singapore → Phnom Penh → Tokyo).
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#d97706;">6th Freedom:</b> Right to carry traffic between two foreign states via home hub (Hub-and-Spoke basis: London → Doha → Bangkok via Qatar Airways).
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#7c3aed;">7th Freedom:</b> Right to operate flights between two foreign states with zero connection to home territory.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#7c3aed;">8th Freedom (Consecutive Cabotage):</b> Domestic flight in foreign state as extension of international flight.
          </div>
          <div style="background:#ffffff;border:1px solid #e2e8f0;padding:8px 12px;border-radius:6px;">
            <b style="color:#dc2626;">9th Freedom (Stand-Alone Cabotage):</b> Pure domestic flight operating inside a foreign state by a foreign carrier.
          </div>
        </div>

        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:8px 12px;font-size:12px;color:#1e3a8a;">
          <b>Bilateral Agreements (BASAs):</b> Commercial air routes do not exist automatically; governments negotiate bilateral agreements specifying permitted freedoms, frequencies, and designated airlines.
        </div>
      </div>
    `,
    speakerNotes: "The 3rd and 4th freedoms are the bread-and-butter of bilateral air service agreements (BASAs). The 6th freedom is what enabled mega-hubs like Singapore Changi, Dubai, and Doha to flourish."
  },

  // Slide 12
  {
    id: 12,
    topicBadge: "TOPIC 1.6 · CAMBODIA AVIATION",
    topicCode: "1.6",
    title: "Cambodia Civil Aviation Master Plan & Strategic Infrastructure",
    subtitle: "Techo KTI (Code 4F), Siem Reap SAI (Code 4E), and regional ASEAN connectivity",
    category: "Cambodia",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;">
          <!-- Techo KTI -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #0056d2;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#0056d2;font-size:14px;">Techo KTI (Phnom Penh)</b>
              <span style="font-size:11px;font-weight:800;background:#eff6ff;color:#0056d2;padding:2px 6px;border-radius:4px;">CODE 4F</span>
            </div>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              • <b>Runway:</b> 4,000 m × 60 m CAT III-B instrument runway.<br>
              • <b>Widebody Capable:</b> Airbus A380-800, Boeing 777-9, Boeing 747-8 at full payload.<br>
              • <b>Phased Growth:</b> Phase 1 (13M pax/year), Phase 2 (30M), Phase 3 (50M).<br>
              • <b>Role:</b> National international long-haul passenger & cargo hub.
            </p>
          </div>

          <!-- Siem Reap SAI -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #16a34a;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#16a34a;font-size:14px;">Siem Reap SAI</b>
              <span style="font-size:11px;font-weight:800;background:#ecfdf5;color:#16a34a;padding:2px 6px;border-radius:4px;">CODE 4E</span>
            </div>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              • <b>Runway:</b> 3,600 m × 45 m CAT II instrument runway.<br>
              • <b>Widebody Capable:</b> Airbus A330/A350, Boeing 787.<br>
              • <b>Heritage Protection:</b> Located 40 km from Angkor Wat to prevent jet engine acoustic vibration & exhaust erosion on UNESCO sandstone temples.
            </p>
          </div>

          <!-- Sihanoukville KOS -->
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:4px solid #d97706;border-radius:10px;padding:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <b style="color:#d97706;font-size:14px;">Sihanoukville KOS</b>
              <span style="font-size:11px;font-weight:800;background:#fef3c7;color:#b45309;padding:2px 6px;border-radius:4px;">CODE 4E EXPANSION</span>
            </div>
            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
              • <b>Runway:</b> Upgraded to 3,300 m.<br>
              • <b>Strategic Role:</b> Coastal economic zone gateway, linking deep-sea port logistics with charter tourism and international cargo.
            </p>
          </div>
        </div>

        <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:10px 14px;font-size:12px;color:#334155;">
          <b>ASEAN Open Skies:</b> Cambodia participates in the ASEAN Single Aviation Market (SAM), liberalizing 3rd, 4th, and 5th freedom traffic between Southeast Asian capital cities.
        </div>
      </div>
    `,
    speakerNotes: "Emphasize why Techo KTI was built as Code 4F. Pochentong (PNH) was landlocked with a 3,000m runway that could not handle full-weight widebodies without payload penalties. KTI's 4,000m runway allows nonstop direct flights to Europe, North America, and Australia."
  },

  // Slide 13
  {
    id: 13,
    topicBadge: "AERODROME GEOMETRY · ICAO ANNEX 14",
    topicCode: "ANNEX 14",
    title: "ICAO Aerodrome Reference Code System",
    subtitle: "Two-element classification dictating runway width, taxiway clearance, and Obstacle Limitation Surfaces",
    category: "Systems",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:12px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <!-- Element 1 -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;padding:14px;">
            <b style="color:#0056d2;font-size:13px;display:block;margin-bottom:6px;">Element 1: Code Number (Field Length)</b>
            <div style="font-size:11.5px;color:#334155;line-height:1.6;">
              Based on <b>Aeroplane Reference Field Length (ARFL)</b>:<br>
              • <b>Code 1:</b> ARFL &lt; 800 m (Light single engine, Cessna 172)<br>
              • <b>Code 2:</b> 800 m ≤ ARFL &lt; 1,200 m (Twin Otter DHC-6)<br>
              • <b>Code 3:</b> 1,200 m ≤ ARFL &lt; 1,800 m (ATR 72, Dash 8-Q400)<br>
              • <b>Code 4:</b> ARFL ≥ 1,800 m (A320, B737, B777, A350, A380)
            </div>
          </div>

          <!-- Element 2 -->
          <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;padding:14px;">
            <b style="color:#16a34a;font-size:13px;display:block;margin-bottom:6px;">Element 2: Code Letter (Wingspan & Gear Span)</b>
            <div style="font-size:11.5px;color:#334155;line-height:1.6;">
              Based on <b>Wingspan</b> & Outer Main Gear Wheel Span:<br>
              • <b>Code A:</b> Wingspan &lt; 15 m<br>
              • <b>Code B:</b> 15 m ≤ Wingspan &lt; 24 m<br>
              • <b>Code C:</b> 24 m ≤ Wingspan &lt; 36 m (A320, B737 family)<br>
              • <b>Code D:</b> 36 m ≤ Wingspan &lt; 52 m (B757, B767)<br>
              • <b>Code E:</b> 52 m ≤ Wingspan &lt; 65 m (A330, A350, B777, B787)<br>
              • <b>Code F:</b> 65 m ≤ Wingspan &lt; 80 m (Airbus A380, B747-8, B777-9)
            </div>
          </div>
        </div>

        <!-- Geometric Impact -->
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 14px;font-size:12px;color:#1e3a8a;">
          <b>Civil Engineering Design Impact:</b> A Code 4F aerodrome (Techo KTI) requires a minimum <b>60 m runway width</b> with 7.5 m paved shoulders, 25 m taxiway width, and wider separation margins compared to a Code 4E aerodrome (45 m runway).
        </div>
      </div>
    `,
    speakerNotes: "This is a foundational concept in airport engineering. Every airport planner must know that an A320 is Code 3C/4C, a B787 is Code 4E, and an A380 is Code 4F. The code directly dictates the required runway width and separation distances."
  },

  // Slide 14
  {
    id: 14,
    topicBadge: "MODULE SYNTHESIS & NEXT STEPS",
    topicCode: "SUMMARY",
    title: "CL01 Summary & Transition to Module CL02",
    subtitle: "Core engineering principles mastered and bridge to Econometric Demand Forecasting",
    category: "Summary",
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px;">
            <b style="color:#15803d;font-size:13.5px;display:block;margin-bottom:4px;">1. Point-to-Point Node Advantage</b>
            <p style="margin:0;font-size:12px;color:#166534;line-height:1.55;">
              Aviation eliminates continuous ground corridor construction costs, focusing engineering investment into airport terminals, runways, and digital navigation.
            </p>
          </div>

          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px;">
            <b style="color:#1e40af;font-size:13.5px;display:block;margin-bottom:4px;">2. Rigorous Spatial Zoning</b>
            <p style="margin:0;font-size:12px;color:#1e3a8a;line-height:1.55;">
              Aerodromes enforce strict separation between Airside aeronautical movement areas and Landside commercial concourses per ICAO Annex 14 & 17.
            </p>
          </div>

          <div style="background:#fef3c7;border:1px solid #fde68a;border-radius:10px;padding:14px;">
            <b style="color:#92400e;font-size:13.5px;display:block;margin-bottom:4px;">3. Three-Tier Governance</b>
            <p style="margin:0;font-size:12px;color:#78350f;line-height:1.55;">
              Global civil aviation operates through ICAO SARPs (standards), IATA (clearinghouse/codes), and sovereign CAAs (Cambodia SSCA enforcement).
            </p>
          </div>

          <div style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:10px;padding:14px;">
            <b style="color:#6d28d9;font-size:13.5px;display:block;margin-bottom:4px;">4. Cambodia's Infrastructure</b>
            <p style="margin:0;font-size:12px;color:#5b21b6;line-height:1.55;">
              Techo KTI (Code 4F) and Siem Reap SAI (Code 4E) establish modern widebody hubs positioning Cambodia as an ASEAN transit crossroads.
            </p>
          </div>
        </div>

        <!-- Next Module Banner -->
        <div style="background:#0056d2;color:#ffffff;border-radius:10px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div>
            <div style="font-size:11px;font-weight:800;letter-spacing:0.06em;opacity:0.85;text-transform:uppercase;">Next Academic Step</div>
            <div style="font-size:15px;font-weight:800;">Proceed to Module CL02: Air Transport Demand & Forecasting</div>
          </div>
          <button onclick="if(window.showPage) window.showPage('cl02');" style="background:#ffffff;color:#0056d2;border:none;padding:8px 16px;border-radius:8px;font-size:12.5px;font-weight:750;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.15);">
            Launch CL02 Overview →
          </button>
        </div>
      </div>
    `,
    speakerNotes: "Congratulate students on completing Module CL01! Advise them to use the interactive simulation and complete their practical worksheet and 15-question quiz before proceeding to CL02 Demand & Forecasting."
  }
];

// Global state for CL01 Slide Deck player
let currentSlideIndex = 0;
let isNotesVisible = false;
let isAutoplayActive = false;
let autoplayTimer: any = null;

export function renderCL01Slide(index: number) {
  if (index < 0) index = 0;
  if (index >= CL01_SLIDES_DATA.length) index = CL01_SLIDES_DATA.length - 1;
  currentSlideIndex = index;

  const slide = CL01_SLIDES_DATA[currentSlideIndex];
  const container = document.getElementById('cl01ActiveSlideCanvas');
  const titleEl = document.getElementById('cl01SlideTitle');
  const subtitleEl = document.getElementById('cl01SlideSubtitle');
  const badgeEl = document.getElementById('cl01SlideTopicBadge');
  const counterEl = document.getElementById('cl01SlideCounterText');
  const progressBar = document.getElementById('cl01SlideProgressBar');
  const selectDropdown = document.getElementById('cl01SlideSelect') as HTMLSelectElement | null;
  const prevBtn = document.getElementById('cl01SlidePrevBtn') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('cl01SlideNextBtn') as HTMLButtonElement | null;
  const notesContent = document.getElementById('cl01NotesContent');

  if (container) {
    container.innerHTML = slide.htmlContent;
  }
  if (titleEl) titleEl.textContent = slide.title;
  if (subtitleEl) subtitleEl.textContent = slide.subtitle;
  if (badgeEl) badgeEl.textContent = slide.topicBadge;
  if (counterEl) counterEl.textContent = `Slide ${currentSlideIndex + 1} of ${CL01_SLIDES_DATA.length}`;

  const pct = Math.round(((currentSlideIndex + 1) / CL01_SLIDES_DATA.length) * 100);
  if (progressBar) progressBar.style.width = `${pct}%`;

  if (selectDropdown) {
    selectDropdown.value = String(currentSlideIndex);
  }

  if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
  if (nextBtn) nextBtn.disabled = currentSlideIndex === CL01_SLIDES_DATA.length - 1;

  if (notesContent) {
    notesContent.innerHTML = `
      <div style="font-size:13px;line-height:1.6;color:#334155;">
        <b style="color:#0056d2;display:block;margin-bottom:4px;">Pedagogical Context & Talking Points:</b>
        ${slide.speakerNotes}
      </div>
    `;
  }

  // Update thumbnail active indicators
  document.querySelectorAll('.cl01-thumb-card').forEach((el, idx) => {
    if (idx === currentSlideIndex) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Re-init lucide icons if applicable
  if ((window as any).lucide && typeof (window as any).lucide.createIcons === 'function') {
    (window as any).lucide.createIcons();
  }
}

export function cl01NextSlide() {
  if (currentSlideIndex < CL01_SLIDES_DATA.length - 1) {
    renderCL01Slide(currentSlideIndex + 1);
  }
}

export function cl01PrevSlide() {
  if (currentSlideIndex > 0) {
    renderCL01Slide(currentSlideIndex - 1);
  }
}

export function cl01GoToSlide(index: number) {
  renderCL01Slide(index);
}

export function cl01ToggleNotes() {
  const panel = document.getElementById('cl01SpeakerNotesPanel');
  const btn = document.getElementById('cl01ToggleNotesBtn');
  if (!panel) return;
  isNotesVisible = !isNotesVisible;
  panel.style.display = isNotesVisible ? 'block' : 'none';
  if (btn) {
    btn.style.background = isNotesVisible ? '#eff6ff' : '#ffffff';
    btn.style.color = isNotesVisible ? '#0056d2' : '#475569';
    btn.style.borderColor = isNotesVisible ? '#bfdbfe' : '#cbd5e1';
  }
}

export function cl01ToggleFullscreen() {
  const deck = document.getElementById('cl01SlideDeckViewer');
  if (!deck) return;

  if (!document.fullscreenElement) {
    if (deck.requestFullscreen) {
      deck.requestFullscreen();
    } else if ((deck as any).webkitRequestFullscreen) {
      (deck as any).webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

export function cl01ToggleThumbnailsModal(open?: boolean) {
  const modal = document.getElementById('cl01ThumbnailsModal');
  if (!modal) return;
  if (typeof open === 'boolean') {
    modal.style.display = open ? 'flex' : 'none';
  } else {
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  }
}

export function cl01ToggleAutoplay() {
  const btn = document.getElementById('cl01AutoplayBtn');
  const icon = document.getElementById('cl01AutoplayIcon');
  isAutoplayActive = !isAutoplayActive;

  if (isAutoplayActive) {
    if (btn) {
      btn.style.background = '#eff6ff';
      btn.style.color = '#0056d2';
      btn.style.borderColor = '#bfdbfe';
    }
    autoplayTimer = setInterval(() => {
      if (currentSlideIndex < CL01_SLIDES_DATA.length - 1) {
        cl01NextSlide();
      } else {
        renderCL01Slide(0);
      }
    }, 8000);
    if ((window as any).showToast) (window as any).showToast('Autoplay started (8s per slide)');
  } else {
    if (btn) {
      btn.style.background = '#ffffff';
      btn.style.color = '#475569';
      btn.style.borderColor = '#cbd5e1';
    }
    if (autoplayTimer) clearInterval(autoplayTimer);
    if ((window as any).showToast) (window as any).showToast('Autoplay paused');
  }
}

export function cl01PrintHandouts() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  const slidesHtml = CL01_SLIDES_DATA.map(s => `
    <div style="page-break-after:always;padding:24px;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:30px;font-family:'Plus Jakarta Sans',sans-serif;">
      <div style="display:flex;justify-content:space-between;border-bottom:2px solid #0056d2;padding-bottom:10px;margin-bottom:16px;">
        <div>
          <span style="font-size:10px;font-weight:800;color:#0056d2;text-transform:uppercase;">${s.topicBadge}</span>
          <h2 style="margin:2px 0;font-size:18px;color:#0f172a;">${s.id}. ${s.title}</h2>
          <div style="font-size:12px;color:#64748b;">${s.subtitle}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;font-weight:800;color:#0056d2;">Slide ${s.id} / 14</div>
          <div style="font-size:10px;color:#64748b;">ITC Learning Hub · CL01</div>
        </div>
      </div>
      <div style="margin-bottom:18px;">
        ${s.htmlContent}
      </div>
      <div style="background:#f8fafc;border-left:3px solid #0056d2;padding:10px 14px;border-radius:6px;font-size:11.5px;color:#334155;">
        <b>Instructor Discussion Notes:</b> ${s.speakerNotes}
      </div>
    </div>
  `).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>ITC CL01 Lecture Slides Handout - Introduction to Air Transportation</title>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
      <style>
        body { font-family:'Plus Jakarta Sans',sans-serif; margin:20px; color:#0f172a; }
        .custom-table { width:100%; border-collapse:collapse; font-size:12px; }
        .custom-table th, .custom-table td { border:1px solid #cbd5e1; padding:8px 10px; text-align:left; }
        .custom-table th { background:#f1f5f9; }
        @media print {
          body { margin:0; }
        }
      </style>
    </head>
    <body>
      <div style="text-align:center;margin-bottom:24px;border-bottom:2px solid #0056d2;padding-bottom:16px;">
        <h1 style="margin:0;font-size:22px;color:#0056d2;">Institute of Technology of Cambodia (ITC)</h1>
        <div style="font-size:14px;font-weight:700;color:#0f172a;margin-top:4px;">Department of Transportation Engineering · CL01 Lecture Slide Deck Handout</div>
        <div style="font-size:12px;color:#64748b;">Introduction to Air Transportation · 14 Comprehensive Reference Slides</div>
      </div>
      ${slidesHtml}
    </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
  }, 400);
}

// Initialize and bind all helpers to window
export function initCL01SlideDeck() {
  (window as any).cl01NextSlide = cl01NextSlide;
  (window as any).cl01PrevSlide = cl01PrevSlide;
  (window as any).cl01GoToSlide = cl01GoToSlide;
  (window as any).cl01ToggleNotes = cl01ToggleNotes;
  (window as any).cl01ToggleFullscreen = cl01ToggleFullscreen;
  (window as any).cl01ToggleThumbnailsModal = cl01ToggleThumbnailsModal;
  (window as any).cl01ToggleAutoplay = cl01ToggleAutoplay;
  (window as any).cl01PrintHandouts = cl01PrintHandouts;

  // Render initial slide if container exists
  if (document.getElementById('cl01ActiveSlideCanvas')) {
    renderCL01Slide(0);
  }

  // Keyboard navigation listener
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    // Only capture if slides page is visible and target is not an input/textarea
    const slidesPage = document.getElementById('cl01slides');
    if (!slidesPage || slidesPage.classList.contains('hide')) return;

    const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      cl01NextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      cl01PrevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      cl01ToggleFullscreen();
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      cl01ToggleNotes();
    } else if (e.key === 'g' || e.key === 'G') {
      e.preventDefault();
      cl01ToggleThumbnailsModal();
    } else if (e.key === 'Escape') {
      cl01ToggleThumbnailsModal(false);
    }
  });
}
