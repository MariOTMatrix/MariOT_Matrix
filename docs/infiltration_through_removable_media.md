---
sidebar_label: 'Infiltration Through Removable Media'
sidebar_position: 1
---

# Infiltration Through Removable Media

# Summary
Adversaries may use USB drives or other removable storage devices to introduce malware into onboard systems. This technique leverages the physical connection of infected media to vessel networks, bypassing traditional cybersecurity measures. The threat is particularly critical in maritime operations, where compromised systems can disrupt navigation, communication, and operational technology (OT) essential for safe and efficient maritime operations. Regular training, strict media usage policies, and advanced threat detection solutions are crucial for mitigating these risks.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| MAT-G1002 | [Raspberry Robin](https://redcanary.com/blog/threat-intelligence/raspberry-robin/) | Raspberry Robin is a sophisticated malware group that primarily uses USB drives to spread its infections. Initially detected in 2021, this group leverages legitimate Windows utilities to execute its payloads and establish command and control (C2) connections. The group is known for its persistence mechanisms and its capability to download and deploy additional malware such as ransomware and backdoors. The activity of Raspberry Robin poses significant threats to various sectors, including maritime environments, where it can cause substantial operational disruptions. |
| MAT-S0608 | [Conficker](https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/malware-discovered-in-german-nuclear-power-plant) | Conficker is a notorious computer worm that first emerged in November 2008. It exploits vulnerabilities in the Windows operating system to spread rapidly across networks, affecting millions of computers worldwide. The name "Conficker" is derived from the words "configure" and a German obscenity. The worm is also known by other names, such as Downadup and Kido. |
| MAT-S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Conficker is a notorious computer worm that first emerged in November 2008. It exploits vulnerabilities in the Windows operating system to spread rapidly across networks, affecting millions of computers worldwide. The name "Conficker" is derived from the words "configure" and a German obscenity. The worm is also known by other names, such as Downadup and Kido. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Network segmentation divides a network into smaller, isolated segments to limit malware spread and enhance security. By isolating segments, it prevents lateral movement of threats, allowing for focused remediation and maintaining operational continuity. This approach improves traffic management, enforces stricter access controls, and protects sensitive data, ensuring that even if one segment is compromised, the entire network remains secure. |
| M0942 | [Disable or Remove Feature or Program](https://attack.mitre.org/mitigations/M0942/) | Disabling of features such as AutoRun. |
| M0934 | [Limit Hardware Installation](https://attack.mitre.org/mitigations/M0934/) | Enforce system policies or physical restrictions to limit hardware such as USB devices on critical assets.. |

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
    <td >(MITRE)DS0016</td>
    <td>[Drive](https://attack.mitre.org/datasources/DS0016/)</td>
    <td>[Drive Creation](https://attack.mitre.org/datasources/DS0016/#Drive%20Creation)</td>
    <td>Monitor for newly constructed drive letters or mount points to removable media.</td>
  </tr>
  <tr>
    <td rowspan="2">(MITRE)DS0022</td>
    <td rowspan="2">[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Access](https://attack.mitre.org/datasources/DS0022/#File%20Access)</td>
    <td>Monitor for files accessed on removable media, particularly those with executable content.</td>
  </tr>
  <tr>
    <td>[File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation)</td>
    <td>Monitor for newly constructed files written to disk through a user visiting a website over the normal course of browsing.</td>
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
1. [MITRE ATT&CK Technique: Replication Through Removable Media. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0847/)
2. [Procedure Examples: Raspberry Robin. Retrieved 01JUL2024.](https://redcanary.com/blog/threat-intelligence/raspberry-robin/)
3. [Procedure Examples: Conficker. Retrieved 01JUL2024.](https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/malware-discovered-in-german-nuclear-power-plant)
4. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
5. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
6. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
7. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
8. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
9. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
10. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
11. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
12. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
13. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
14. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
15. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
16. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
17. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
18. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
19. [MITRE ATT&CK Mitigation: Disable or Remove Feature or Program. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0942/)
20. [MITRE ATT&CK Mitigation: Limit Hardware Installation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0934/)
21. [MITRE ATT&CK Detection: Drive. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0016/)
22. [MITRE ATT&CK Detection: Drive Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0016/#Drive%20Creation)
23. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
24. [MITRE ATT&CK Detection: File Access. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Access)
25. [MITRE ATT&CK Detection: File Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Creation)
26. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
27. [MITRE ATT&CK Detection: Process Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
28. [Ralph Langner. A Technical Analysis of What Stuxnet’s Creators Tried to Achieve. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
29. [Nicolas Falliere, Liam O Murchu, and Eric Chien. W32.Stuxnet Dossier. Retrieved 01JUL2024.](https://www.wired.com/images_blogs/threatlevel/2011/02/Symantec-Stuxnet-Update-Feb-2011.pdf)