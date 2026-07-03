---
id: ais_spoofing
sidebar_label: 'AIS Spoofing'
---

# AIS Spoofing

# Summary

Automatic Identification System (AIS) spoofing involves broadcasting false vessel data (identity, location, course, etc.) to mislead tracking systems. In maritime contexts, attackers or illicit actors can create “ghost ships” – phantom vessels that appear on AIS monitors but do not exist – or hide the real movements of a ship. This deception can trick port authorities and other ships, mask illegal activities (like sanctions evasion or smuggling), and cause confusion in navigation.​[^1](https://maritimafrica.com/en/ghost-ships-and-digital-vulnerabilities-a-look-into-maritime-cyber-espionage/#:~:text=The%20ships%20were%20digital%20fabrications%2C,AIS%20systems%20to%20cyber%20manipulation)


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD00015      | [AIS Data Vulnerability Indicated by a Spoofing Case-Study](https://www.mdpi.com/2076-3417/11/11/5015?) |A study published in the journal Applied Sciences detailed an AIS spoofing incident that occurred near the Italian island of Elba in December 2019. The study showed that attackers sent forged AIS signals, causing the ship's navigation system to receive incorrect position information, thus affecting navigation safety in international waters. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0006 | [Automatic Identification System (AIS)](/assets/automatic_identification_system) |
| L0021 | [Global Positioning System](/assets/global_positioning_system) |
| L0014 | [Integrated Communication Systems](/assets/integrated_communication_systems)  |
| L0022 | [Aid to Navigation System](/assets/aid_to_navigation_system) |
| L0023 | [Radar and Automatic Radar Plotting Aid](/assets/radar_and_arpa_system) |
| L0024 | [Vessel Traffic Services](/assets/vessel_traffic_services) |
| L0025 | [AIS-SART and MOB-AIS Devices](/assets/ais_sart_and_mob) |
| L0007 | [Electronic Chart Display and Information System (ECDIS)](/assets/electronic_chart_display_and_information_system) |
| L0017 | [Emergency Position Indication Radio Beacon](/assets/emergency_position_indication_radio_beacon) |
| L0016 | [Voyage Data Recorder](/assets/voyage_data_recorder) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0013](https://www.transnav.eu/Article_Protected_AIS:_A_Demonstration_Kessler,54,1002.html) | Protected AIS |Kessler proposed the protected AIS (pAIS) software, which uses a public-key cryptography method. |
| [R0014](https://ieeexplore.ieee.org/document/9162320) | Secure AIS application protocol| Aziz et al. proposed the secure AIS application protocol, which is based on a pairwise key and aims to encrypt and authenticate the transmission of messages. |
| [R0015](https://ieeexplore.ieee.org/document/9390297) | Auth-AIS | Sciancalepore et al. introduced the Auth-AIS as an authentication scheme using the Deterministic Security Configuration model. |
| [R0016](https://link.springer.com/article/10.1007/s00773-018-0561-3) |Maritime Identity-Based Cryptography|Goudossis and Katsikas proposed the architecture of maritime certificate-less identity-based public-key cryptography (mIBC). |
| [R0018](https://gcaptain.com/uscg-ais-aton-navigation/) |  Combining virtual and physical AtoNs | Combining virtual and physical AtoNs is considered an effective measure to avoid the negative consequences of V-AtoN spoofing. |

&nbsp;

# Detection
<table>
  <tr>
    <th>ID</th>
    <th>Data Source</th>
    <th>Data Components</th>
    <th>Detects</th>
  </tr>
   <tr>
    <td>FL0002</td>
    <td>[Network Traffic Logs](/detections/network_traffic_logs)</td>
    <td>Network Flow Data</td>
    <td>By deploying a network of receivers and analyzing the Time Difference of Arrival (TDOA) of AIS signals, it is possible to detect and locate the source of spoofed transmissions.</td>
  </tr>
 <tr>
    <td>FL0006</td>
    <td>[Endpoint Detection and Response ](/detections/endpoint_detection_and_response)</td>
    <td>Remote Administration Activity</td>
    <td>Analyze the received AIS signal strength, identify signal anomalies, and detect possible deception.</td>
  </tr>
   <tr>
    <td>FL0003</td>
    <td>[HMI interaction logs](/detections/hmi_interaction_logs)</td>
    <td>Anomalous GUI Interactions</td>
    <td>Compare AIS data with targets detected by radar to identify forged or tampered information in AIS signals.</td>
  </tr>
   <tr>
    <td>FL0005</td>
    <td>[Engineering Workstation Actions](/detections/engineering_workstation_actions)</td>
    <td>Command Execution Logging</td>
    <td>Use machine learning or statistical methods to detect unusual patterns in AIS data and identify potential fraudulent behavior.</td>
  </tr>
</table>

##

# References
1. [Ghost Ships and Digital Vulnerabilities: A Look into Maritime Cyber Espionage. Retrieved April 8, 2025.](https://maritimafrica.com/en/ghost-ships-and-digital-vulnerabilities-a-look-into-maritime-cyber-espionage/#:~:text=The%20ships%20were%20digital%20fabrications%2C,AIS%20systems%20to%20cyber%20manipulation)
2. [AIS Data Vulnerability Indicated by a Spoofing Case-Study. Retrieved April 8, 2025.](https://www.mdpi.com/2076-3417/11/11/5015?)
3. [Protected AIS: A Demonstration of Capability Scheme to Provide Authentication and Message Integrity. Retrieved April 8, 2025.](https://www.transnav.eu/Article_Protected_AIS:_A_Demonstration_Kessler,54,1002.html)
4. [SecureAIS - Securing Pairwise Vessels Communications. Retrieved April 8, 2025.](https://ieeexplore.ieee.org/document/9162320)
5. [Auth-AIS: Secure, Flexible, and Backward-Compatible Authentication of Vessels AIS Broadcasts. Retrieved April 8, 2025.](https://ieeexplore.ieee.org/document/9390297)
6. [Towards a secure automatic identification system (AIS). Retrieved April 8, 2025.](https://link.springer.com/article/10.1007/s00773-018-0561-3)
7. [USCG Rolling Out AIS Aids to Navigation: Are They Safe AND Secure?. Retrieved April 8, 2025.](https://gcaptain.com/uscg-ais-aton-navigation/)
