---
sidebar_label: 'Drive-by Compromise'
sidebar_position: 0
---

# Drive-by Compromise

# Summary
Adversaries may gain access to a maritime system during a drive-by compromise, when a crew member or port official visits a website as part of a regular browsing session. With this technique, the user's web browser is targeted and exploited simply by visiting the compromised website.

The adversary may target a specific maritime community, such as trusted third-party suppliers or other industry-specific groups, which often visit the target website. This kind of targeted attack relies on a common interest, and is known as a strategic web compromise or watering hole attack.

The National Cyber Awareness System (NCAS) has issued a Technical Alert (TA) regarding Russian government cyber activity targeting critical infrastructure sectors. Analysis by DHS and FBI has noted two distinct categories of victims in the Dragonfly campaign on the Western energy sector: staging and intended targets. The adversary targeted the less secure networks of staging targets, including trusted third-party suppliers and related peripheral organizations. Initial access to the intended targets used watering hole attacks to target process control, ICS, and critical infrastructure related trade publications and informational websites.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| G1000 | [ALLANITE](https://attack.mitre.org/groups/G1000/) | ALLANITE leverages watering hole attacks to gain access into electric utilities. |
| S0606 | [Bad Rabbit](https://attack.mitre.org/software/S0606/) | Bad Rabbit ransomware spreads through drive-by attacks where insecure websites are compromised. While the target is visiting a legitimate website, a malware dropper is being downloaded from the threat actors infrastructure. |
| G0035 | [Dragonfly](https://attack.mitre.org/groups/G0035/) | Dragonfly utilized watering hole attacks on energy sector websites by injecting a redirect iframe to deliver Backdoor.Oldrea or Trojan.Karagany. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0948 | [Application Isolation and Sandboxing](https://attack.mitre.org/mitigations/M0948/) | Built-in browser sandboxes and application isolation may be used to contain web-based malware. |
| M0950 | [Exploit Protection](https://attack.mitre.org/mitigations/M0950/) | Utilize exploit protection to prevent activities which may be exploited through malicious web sites. |
| M0921 | [Restrict Web-Based Content](https://attack.mitre.org/mitigations/M0921/) | Restrict browsers to limit the capabilities of malicious ads and Javascript. |
| M0951 | [Update Software](https://attack.mitre.org/mitigations/M0951/) | Ensure all browsers and plugins are kept updated to help prevent the exploit phase of this technique. Use modern browsers with security features enabled. |

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
    <td >(MITRE)DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do reputation-based analytics on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before.</td>
  </tr>
  <tr>
    <td>(MITRE)DS0022</td>
    <td>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation)</td>
    <td>Monitor for newly constructed files written to disk through a user visiting a website over the normal course of browsing.</td>
  </tr>
  <tr>
    <td rowspan="2">(MITRE)DS0029</td>
    <td rowspan="2">[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td >[Network Connection Creation](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)</td>
    <td>Monitor for newly constructed network connections to untrusted hosts that are used to send or receive data.</td>
  </tr>
  <tr>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor for unusual network traffic that may indicate additional tools transferred to the system. Use network intrusion detection systems, sometimes with SSL/TLS inspection, to look for known malicious scripts (recon, heap spray, and browser identification scripts have been frequently reused), common script obfuscation, and exploit code.</td>
  </tr>
  <tr>
    <td>(MITRE)DS0009</td>
    <td> [Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for behaviors on the endpoint system that might indicate successful compromise, such as abnormal behaviors of browser processes. This could include suspicious files written to disk.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Drive-by Compromise. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0817/)
2. [Procedure Examples: ALLANITE Retrieved 01JUL2024.](https://attack.mitre.org/groups/G1000/)
3. [Procedure Examples: Bad Rabbit. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0606/)
4. [Procedure Examples: Dragonfly. Retrieved 01JUL2024.](https://attack.mitre.org/groups/G0035/)
5. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
6. [MITRE ATT&CK Mitigation: Application Isolation and Sandboxing. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0948/)
7. [MITRE ATT&CK Mitigation: Exploit Protection. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0950/)
8. [MITRE ATT&CK Mitigation: Restrict Web-Based Content. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0921/)
9. [MITRE ATT&CK Mitigation: Update Software. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0951/)
10. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
11. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
12. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
13. [MITRE ATT&CK Detection: File Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Creation)
14. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
15. [MITRE ATT&CK Detection: Network Connection Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)
16. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
17. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
18. [MITRE ATT&CK Detection: Process Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
