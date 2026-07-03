---
sidebar_label: 'Supply Chain Compromise'
sidebar_position: 4
---

# Supply Chain Compromise

# Summary
Adversaries may perform supply chain compromise to gain access to maritime control systems environments by means of infected products, software, and workflows. Supply chain compromise involves the manipulation of products, such as devices or software, or their delivery mechanisms before receipt by the end consumer. Adversary compromise of these products and mechanisms is done with the goal of data or system compromise once infected products are introduced to the target environment.

Supply chain compromise can occur at all stages of the supply chain, from manipulation of development tools and environments to manipulation of developed products and tools' distribution mechanisms. This may involve the compromise and replacement of legitimate software and patches, such as those on third-party or vendor websites. Targeting of supply chain compromise can be done in attempts to infiltrate the environments of a specific maritime audience. In maritime control systems environments with assets in both IT and OT networks, it is possible a supply chain compromise affecting the IT environment could enable further access to the OT environment.

Counterfeit devices may be introduced to the global maritime supply chain, posing safety and cyber risks to asset owners and operators. These devices may not meet the safety, engineering, and manufacturing requirements of regulatory bodies but may feature tagging indicating conformance with industry standards. Due to the lack of adherence to standards and overall lesser quality, the counterfeit products may pose a serious safety and operational risk.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| P0001      | [Naval Dome exposes vessel vulnerabilities to cyber attack](https://www.seatrade-maritime.com/asia/naval-dome-exposes-vessel-vulnerabilities-cyber-attack) | The adversaries are able to gain access to critical systems on board a ship and manipulate a ship’s position, disable machinery, and delete radar targets. The attacks are possible because ships rely on outdated security measures. |
| G0035 | [Dragonfly](https://attack.mitre.org/groups/G0035/) | Dragonfly trojanized legitimate ICS equipment providers software packages available for download on their websites. |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses. Perform periodic integrity checks of the device to validate the correctness of the firmware, software, programs, and configurations. Integrity checks, which typically include cryptographic hashes or digital signatures, should be compared to those obtained at known valid states, especially after events like device reboots, program downloads, or program restarts. |
| M0945 | [Code Signing](https://attack.mitre.org/mitigations/M0945/) | When available utilize hardware and software root-of-trust to verify the authenticity of a system. This may be achieved through cryptographic means, such as digital signatures or hashes, of critical software and firmware throughout the supply chain. |
| M0817 | [Supply Chain Management](https://attack.mitre.org/mitigations/M0817/) | A supply chain management program should include methods the assess the trustworthiness and technical maturity of a supplier, along with technical methods (e.g., code-signing, bill of materials) needed to validate the integrity of newly obtained devices and components. Develop procurement language that emphasizes the expectations for suppliers regarding the artifacts, audit records, and technical capabilities needed to validate the integrity of the devices supply chain. |
| M0951 | [Update Software](https://attack.mitre.org/mitigations/M0951/) | A patch management process should be implemented to check unused dependencies, unmaintained and/or previously vulnerable dependencies, unnecessary features, components, files, and documentation. |
| M0916 | [Vulnerability Scanning](https://attack.mitre.org/mitigations/M0916/) | Implement continuous monitoring of vulnerability sources. Also, use automatic and manual code review tools. |

&nbsp;

# Detection
| ID      | Data Source       | Data Components | Detects |
|:------------|:-----------|:--------------|:--------|
| DS0022 | [File](https://attack.mitre.org/datasources/DS0022/) | [File Metadata](https://attack.mitre.org/datasources/DS0022/#File%20Metadata) | Use verification of distributed binaries through hash checking or other integrity checking mechanisms. Scan downloads for malicious signatures. |


&nbsp;

# References
1. [MITRE ATT&CK Technique: Supply Chain Compromise](https://attack.mitre.org/techniques/T0862/).
2. [Naval Dome exposes vessel vulnerabilities to cyber attack](https://www.seatrade-maritime.com/asia/naval-dome-exposes-vessel-vulnerabilities-cyber-attack).
3. [Dragonfly](https://attack.mitre.org/groups/G0035/).
4. [MITRE ATT&CK Mitigation: Audit](https://attack.mitre.org/mitigations/M0947/).
5. [MITRE ATT&CK Mitigation: Code Signing](https://attack.mitre.org/mitigations/M0945/)
6. [MITRE ATT&CK Mitigation: Supply Chain Management](https://attack.mitre.org/mitigations/M0817/).
7. [MITRE ATT&CK Mitigation: Update Software](https://attack.mitre.org/mitigations/M0951/).
8. [MITRE ATT&CK Mitigation: Vulnerability Scanning](https://attack.mitre.org/mitigations/M0916/).
9. [MITRE ATT&CK Detection: File](https://attack.mitre.org/datasources/DS0022/).
10. [MITRE ATT&CK Detection: File Metadata](https://attack.mitre.org/datasources/DS0022/#File%20Metadata).