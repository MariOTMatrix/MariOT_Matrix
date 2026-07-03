---
id: execution_via_gui
sidebar_label: Execution via GUI
---

# Execution via GUI

# Summary

Execution via GUI (Graphical User Interface) in maritime operational technology (OT) systems refers to adversaries leveraging legitimate OT HMI (Human-Machine Interface), SCADA control panels, or onboard vessel management interfaces to execute unauthorized commands, alter system settings, or deploy malicious scripts.[^1](https://arxiv.org/pdf/2409.11417)[^2](https://pmc.ncbi.nlm.nih.gov/articles/PMC8124306/)

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD0008      | [ Stealthy Deception Attacks Against SCADA Systems](https://arxiv.org/pdf/1706.09303) | The attack targeted SCADA systems by hijacking communication between Human-Machine Interface (HMI) panels and Programmable Logic Controllers (PLCs). The attacker modified Modbus response messages, causing the HMI to display falsified system states. This misled operators into taking incorrect manual actions, resulting in unnecessary power reconfigurations and potential system failures​. A similar attack could target SCADA Systems and Power Management Systems (PMS) on ships. By hijacking communication between PMS HMIs and shipboard PLCs, an attacker could alter power system readings. This could falsely indicate balanced power distribution while the vessel's electrical system is actually in a critical state.|
| ZD00013      | [Overview of a Password Vulnerability in Siemens HMIs](https://arxiv.org/pdf/2009.03961) |A vulnerability in Siemens HMI panels allowed attackers to brute-force passwords via VNC-based remote access. Once access was obtained, attackers gained full control over the HMI, allowing them to modify settings, disable security features, or alter system states​.Maritime SCADA Systems, Integrated Communication Systems, and Power Management Systems (PMS) use HMI-based controls for shipboard operations. If attackers gain unauthorized access through remote maintenance interfaces, they could take control of Vessel Management Systems (VMS), disabling alarms, modifying engine control settings, or manipulating ballast systems.|

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0004 | [Supervisory Control and Data Acquisition (SCADA) Systems](/assets/supervisory_control_and_data_acquisition_systems) |
| L0003 | [Vessel Management Systems (VMS)](/assets/vessel_management_systems) |
| L0015 | [Power Management Systems](power_management_systems) |
| L0014 | [Integrated Communication Systems](integrated_communication_systems)  |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0008](https://cache.industry.siemens.com/dl/files/300/109481300/att_1039769/v2/109481300_SecurityGuidelineUnified_V10_en.pdf) | Configure on-screen confirmation and different password |Configure on-screen confirmation for remote connections(for scenarios where operators are present on site and
remote access is for remote support only).Configure a different password to prevent access to the settings menus without further authentication. |
| [R0009](https://cert-portal.siemens.com/operational-guidelines-industrial-security.pdf?ste_sid=23c4ccd8e5eff3a0726d7178627d9a94) | Configure firewall rules to restrict remote access | Configure firewall rules to only allow specific client IP addresses to access target devices over VNC connections.|
| [M0812](https://attack.mitre.org/mitigations/M0812/) | Safety Instrumented Systems |Use encryption to protect the confidentiality and integrity of network communications. For example, use TLS to encrypt communications for applications that support it.|


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
    <td>Remote Desktop Protocol (RDP) Sessions</td>
    <td>If an attacker tampers with register addresses in HMI requests (as in a half-duplex attack), a protocol-aware detector deployed on the PLC side can identify abnormal read and write patterns.</td>
  </tr>
  <tr>
     <td >FL0001</td>
    <td>[Authentication Logs](/detections/authentication_logs)</td>
    <td>User Login Events</td>
    <td> Configure intrusion detection systems to look for large volumes of failed VNC connection requests to single HMIs.</td>
  </tr> 
</table>

##

# References
1. [Maritime Cybersecurity: A Comprehensive Review. Retrieved March 19, 2025.](https://arxiv.org/pdf/2409.11417)
2. [A Triggering Mechanism for Cyber-Attacks in Naval Sensors and Systems. Retrieved March 18, 2025.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8124306/)
3. [Stealthy Deception Attacks Against SCADA Systems . Retrieved March 19, 2025.](https://arxiv.org/pdf/1706.09303)
4. [GUI-Squatting Attack: Automated Generation of Android Phishing Apps. Retrieved March 19, 2025.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8913495)
5. [Overview of a Password Vulnerability in Siemens HMIs. Retrieved March 19, 2025.](https://arxiv.org/pdf/2009.03961)
6. [Siemens. Security Guidelines for SIMATIC HMI Operator Panels. Retrieved March 27, 2025.](https://cache.industry.siemens.com/dl/files/300/109481300/att_1039769/v2/109481300_SecurityGuidelineUnified_V10_en.pdf)
7. [Siemens. operational Guidelines for Industrial Security. Retrieved March 27, 2025.](https://cert-portal.siemens.com/operational-guidelines-industrial-security.pdf?ste_sid=23c4ccd8e5eff3a0726d7178627d9a94)
