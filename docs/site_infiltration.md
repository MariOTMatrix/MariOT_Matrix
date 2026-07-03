---
sidebar_label: 'Site Infiltration'
sidebar_position: 2
---

# Site Infiltration

# Summary
Adversaries may physically infiltrate maritime premises to install malicious devices or software on shipboard or port computers. This is not confined to the installation of devices such as key-loggers but also includes tactics to entice crew members or port employees into installing these malicious entities on their work computers. The attack methods can range from software exploits to hardware tampering, depending on the resources and objectives of the attacker.

For instance, adversaries may target devices that transiently connect across maritime control networks and external networks, exploiting vulnerabilities in these devices to gain access. They may also move onto systems separated from the main network by copying malware onto removable media, which is then inserted into the vessel's control systems environment. Furthermore, adversaries may communicate using application layer protocols associated with web traffic to avoid detection or network filtering by blending in with existing traffic.

Covert surveillance devices may also be used by adversaries to eavesdrop and gather data, further expanding the range of potential attacks. This underscores the importance of comprehensive security measures, both digital and physical, in safeguarding sensitive maritime information.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| P0001      | [Port Antwerp Cyberattack](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf) | The adversary (drug cartel) had hijacked its container management system. In fact, the port’s computer network had been spied on since June 2011, when the network was reportedly infiltrated by malware, specifically a keylogger (which allowed the adversary to record the keystrokes used by the loading / unloading operators, and thereby obtain usernames and passwords). |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M1001 | [Employee Training and Awareness](https://www.cybsafe.com/blog/7-reasons-why-security-awareness-training-is-important/) | Employee training and awareness are vital for security, as informed employees can recognize and respond to threats like phishing, suspicious devices, and unauthorized software. Regular education on best practices reduces attack success rates and fosters a culture of security, enhancing overall organizational resilience. |
| M1002 | [Physical Security Enhancements](https://www.infosecinstitute.com/resources/general-security/importance-physical-security-workplace/) | Physical security enhancements are essential for protecting an organization's critical assets and sensitive information. By securing access to key areas with measures like multi-factor authentication, surveillance, and regular security sweeps, organizations can prevent unauthorized entry and the installation of malicious devices. These enhancements not only deter potential infiltrators but also ensure that any security breaches are quickly detected and addressed, thereby safeguarding both physical and digital assets. |

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
    <td >D1001</td>
    <td>[Physical Security Systems](https://www.pelco.com/blog/physical-security-guide#:~:text=Physical%20security%20controls%20examples%20include,contact%20law%20enforcement%20if%20needed.)</td>
    <td>Surveillance camera footage</td>
    <td> Monitors activity within its field of view, which can include people, vehicles, and objects. This recorded video can be used for security purposes, to monitor employee activity, or infiltration of malicious actor.</td>
  </tr>
  <tr>
    <td>DS1002</td>
    <td>[Endpoint Protection Logs](https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/hierarchy/log-files)</td>
    <td>Malware detection events</td>
    <td>Monitors logs that capture detailed activity of your security software on individual devices, revealing malware detections, scan results, and program status, so you can identify and address potential security threats before they cause harm.</td>
  </tr>
</table>

##

# References
1. [Procedure Examples: Port Antwerp Cyberattack Retrieved 01JUL2024.](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf)
2. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
3. [Mitigation: Employee Training and Awareness, 7 reasons why security awareness training is important in 2023. Retrieved 01JUL2024.](https://www.cybsafe.com/blog/7-reasons-why-security-awareness-training-is-important/)
4. [Mitigation: Physical Security Enhancements, The importance of physical security in the workplace. Retrieved 01JUL2024.](https://www.infosecinstitute.com/resources/general-security/importance-physical-security-workplace/)
5. [Detection:Physical Security Systems, GUIDE TO PHYSICAL SECURITY CONTROLS, PLANNING, POLICIES AND MEASURES. Retrieved 01JUL2024.](https://www.pelco.com/blog/physical-security-guide#:~:text=Physical%20security%20controls%20examples%20include,contact%20law%20enforcement%20if%20needed.)
6. [Detection: Log file reference. Retrieved 01JUL2024.](https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/hierarchy/log-files)
