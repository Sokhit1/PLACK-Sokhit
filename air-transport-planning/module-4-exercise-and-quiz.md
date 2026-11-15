# Module 4 · Exercise and Review Quiz

**Air Transport Planning and Management** · Airport Capacity and Level of Service · Dr. PLACK Sokhit

[← Back to course page](README.md)

---

## Classroom exercise: find the bottleneck

*Group work, about 20 minutes.*

A departing passenger passes through these facilities in series:

| Facility | Capacity (pax/h) | D/C |
|---|---:|---:|
| Check-in | 2,500 | ? |
| Security | 1,800 | ? |
| Immigration | 2,200 | ? |
| Boarding | 2,600 | ? |

**Peak-hour demand:** 2,100 passengers per hour through every facility.

### Tasks

1. Calculate the D/C ratio for each facility.
2. Identify the bottleneck.
3. Explain the likely effect on passengers.
4. Recommend short-term and long-term improvements.

Formula: `D/C = Demand ÷ Capacity`

- D/C < 1.0 → capacity is greater than demand
- D/C ≈ 1.0 → the facility is approaching capacity
- D/C > 1.0 → demand exceeds available capacity

---

## Solution

| Facility | Calculation | D/C | Status |
|---|---|---:|---|
| Check-in | 2,100 ÷ 2,500 | 0.84 | Spare capacity |
| **Security** | **2,100 ÷ 1,800** | **1.17** | **Bottleneck: over capacity** |
| Immigration | 2,100 ÷ 2,200 | 0.95 | Approaching capacity |
| Boarding | 2,100 ÷ 2,600 | 0.81 | Spare capacity |

**Effect on passengers.** The queue before security grows by 2,100 − 1,800 = 300 passengers per hour. By the end of the peak hour about 300 passengers are waiting, an extra wait of about 10 minutes (300 ÷ 1,800 × 60), with crowding before the checkpoint and a risk of missed flights. Immigration and the gates receive fewer passengers than they could handle.

**Short-term improvements**

- Open every lane and add staff in the peak
- More divest positions and queue marshals
- Fast-track lanes; advise passengers to arrive outside the peak

**Long-term improvements**

- More lanes: at about 150 pax/h per lane, 14 lanes give 2,100 pax/h; plan 15–16 for a margin
- Automated screening lanes and CT scanners
- A larger checkpoint area
- Monitor immigration (D/C 0.95): it becomes the next bottleneck

---

## Review quiz

1. Demand is 1,500 pax/h and capacity is 2,000 pax/h. What is the D/C ratio?
   A. 0.75 · B. 1.33 · C. 0.50
2. In a series process chain, what sets the overall passenger-processing capacity?
   A. The largest facility · B. The facility with the lowest capacity · C. The average of all facilities
3. Which runway layout usually gives the highest hourly capacity?
   A. Single runway · B. Intersecting runways · C. Independent parallel runways
4. Which of these is a passenger Level of Service indicator?
   A. Waiting time · B. Jet fuel price · C. Airline market share
5. Which measure is a long-term infrastructure solution?
   A. Better gate allocation · B. Terminal expansion · C. Extra staff on one shift

<details>
<summary><b>Answers</b></summary>

1. **A** — 1,500 ÷ 2,000 = 0.75
2. **B** — the weakest facility limits the whole chain
3. **C** — independent parallel runways operate separately
4. **A** — waiting time
5. **B** — terminal expansion; the others are operational measures

</details>
