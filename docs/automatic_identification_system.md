---
sidebar_label: 'AIS Exploitation'
sidebar_position: 53
---

# Automatic Identification System(AIS) Exploitation

# Summary
Adversaries may exploit the Automatic Identification System (AIS), a self-reporting system mandated by the International Maritime Organization in 2004 for enhancing situational awareness of maritime vessels. The AIS, which uses the VHF radio link, is fundamentally vulnerable to cyberattacks due to its lack of authentication or encryption.

Adversaries may perform multiple cyberattacks on AIS via remote radio frequency (RF) links using transmission-enabled software-defined radio (SDR). These attacks can be conducted on various AIS setups derived from heterogeneous platforms such as Windows, Android, generic receivers, and commercial transponders.

The potential attacks include Denial-of-Service (DoS) attacks at the AIS protocol level, spoofing, flooding, coordinated attacks, overwhelming alerts, and exploiting logical vulnerabilities. These attacks have the potential to cause software/system crashes in worst-case scenarios.

Adversaries may also exploit an implementation/specification flaw related to the AIS preamble, which may affect the interoperability of different AIS devices. Unlike the aviation sector’s Automatic Dependent Surveillance-Broadcast (ADS-B), the maritime sector’s AIS does not effectively support any error correction method, which may contribute to RF pollution and less effective use of the overall system.

The aim of these potential attacks is to discover new vulnerabilities in AIS to effectively address AIS attacks in the future. The consistency of the results for a comprehensive range of hardware-software configurations indicates the reliability of this approach, test system, and evaluation results.

&nbsp;

# Procedure Examples
| ID      | Name     | Description |
|:------------|:-----------|:--------------|
| R0004 | [Cybersecurity Attacks on Software Logic and Error Handling Within AIS Implementations](https://www.researchgate.net/publication/359185932_Cybersecurity_Attacks_on_Software_Logic_and_Error_Handling_Within_AIS_Implementations_A_Systematic_Testing_of_Resilience) | Researchers performed a series of cyberattacks on various AIS setups, derived from platforms like Windows, Android, generic receivers, and commercial transponders. They tested 11 different attack types, including Denial-of-Service (DoS), spoofing, and flooding, and introduced new attack methods such as coordinated attacks and overwhelming alerts. The study revealed that approximately 89% of the AIS setups were vulnerable to DoS attacks. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0016 | Automatic Identification System(AIS) |


&nbsp;

# Mitigations
| ID      | Mitigation    | Description |
|:------------|:-----------|:--------------|
| M1000 | AIS Message Authentication and Encryption | To prevent unauthorized message alterations and ensure the authenticity of transmitted AIS messages, implementing authentication and encryption mechanisms is suggested. This would help in mitigating spoofing and false data injection attacks. |
| M1001 | AIS Message Validation and Filtering | Implementing robust validation checks on incoming AIS messages can help identify and filter out invalid or suspicious data. This approach would reduce the impact of coordinated and overwhelming alert attacks by ensuring only legitimate messages are processed. |
| M1002 | Adaptive Alert Management | To handle overwhelming alerts effectively, adaptive alert management systems are recommended. These systems would prioritize alerts based on their criticality and reduce "alert fatigue" by managing the frequency and volume of alerts displayed to the user. |

&nbsp;

# Detection
| ID      | Data Source       | Data Component | Detects |
|:------------|:-----------|:--------------|:--------|
| D1000 | AIS signals received through VHF radio frequencies (Channel A & B) | Ship Information (E.g. MMSI, Navigation Status) | Cyclic Redundancy Check (CRC) detects data corruption in AIS messages. If a message fails the CRC check, it is assumed to be erroneous and is dropped by the system. While this prevents corrupted messages from being processed, it does not provide user alerts about the dropped messages. |
| D1002 | AIS Transponders | Location information from GNSS (E.g. GPS ) | The Received Signal Strength (RSS) and Distance Relationship Model is used to detect erroneous AIS transmissions by correlating the received signal strength with the expected distance. Discrepancies between the actual RSS and the predicted RSS based on the vessel's reported position can indicate falsified AIS data, identifying potential spoofing or tampering attempts​. |
| D1003 | Navigation data from AIS receivers fed to mobile applications via WiFi connections | Navigation Status (E.g., Underway, Anchored, Maneuvering) | The Methodology for Real-Time Detection of AIS Falsification detects falsified AIS data in real-time by analyzing the integrity and consistency of the data. It checks for anomalies and discrepancies in AIS messages, such as impossible navigation data or inconsistent vessel information, to identify and flag potential falsifications​ |

&nbsp;

# References
1. [Cybersecurity Attacks on Software Logic and Error Handling Within AIS Implementations: A Systematic Testing of Resilience. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/9733358).
2. [Threats at Sea: A Security Evaluation of AIS. Retrieved 01JUL2024.](https://www.trendmicro.com/vinfo/sg/security/news/cybercrime-and-digital-threats/a-security-evaluation-of-ais).
3. [Risk sensitivity analysis of AIS cyber security through maritime cyber regulatory frameworks. Retrieved 01JUL2024.](https://www.sciencedirect.com/science/article/pii/S0141118723003966)
