---
sidebar_label: 'Adversary in the middle'
sidebar_position: 19
---

# Adversary in the middle

# Summary
Adversaries may modify maritime network traffic in real time using adversary-in-the-middle (AiTM) attacks. These attacks allow adversaries to intercept, block, log, modify, or inject traffic between maritime devices. Common methods include Address Resolution Protocol (ARP) poisoning and the use of proxies.

Adversaries may poison ARP caches to position themselves between communicating maritime devices, enabling follow-on behaviors like Network Sniffing or Transmitted Data Manipulation. The ARP protocol resolves IPv4 addresses to MAC addresses but is stateless and unauthenticated, allowing adversaries to deceive devices by replying faster than legitimate IP address owners or sending gratuitous ARP replies.

Adversaries may use ARP cache poisoning to intercept maritime network traffic, collect data, and relay credentials sent over unencrypted protocols.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| P0001 | [Validating Anomaly Detection Mechanisms In Industrial Control Systems](https://www.researchgate.net/publication/342732440_Validating_Anomaly_Detection_Mechanisms_In_Industrial_Control_Systems) | The adversaries are able to gain access to critical systems on board a ship and manipulate a ship’s position, disable machinery, and delete radar targets. The attacks are possible because ships rely on outdated security measures. |
| C0030 | [Triton Safety Instrumented System Attack](https://attack.mitre.org/campaigns/C0030/) | In the Triton Safety Instrumented System Attack, TEMP.Veles changed phone numbers tied to certain specific accounts in a designated contact list. They then used the changed phone numbers to redirect network traffic to websites controlled by them, thereby allowing them to capture and use any login codes sent to the devices via text message. |
| S1010 | [VPNFilter](https://attack.mitre.org/software/S1010/) | The VPNFilter's ssler module configures the device's iptables to redirect all traffic destined for port 80 to its local service listening on port 8888. Any outgoing web requests on port 80 are now intercepted by ssler and can be inspected by the ps module and manipulated before being sent to the legitimate HTTP service. |

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
| A0014 | [Routers](https://attack.mitre.org/assets/A0014/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Limit access to network infrastructure and resources that can be used to reshape traffic or otherwise produce AiTM conditions. |
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | PCommunication authenticity will ensure that any messages tampered with through AiTM can be detected, but cannot prevent eavesdropping on these. In addition, providing communication authenticity around various discovery protocols, such as DNS, can be used to prevent various AiTM procedures. |
| M0942 | [Disable or Remove Feature or Program](https://attack.mitre.org/mitigations/M0942/) | Disable unnecessary legacy network protocols that may be used for AiTM if applicable. |
| M0931 | [Network Intrusion Prevention](https://attack.mitre.org/mitigations/M0931/) | Network intrusion detection and prevention systems that can identify traffic patterns indicative of AiTM activity can be used to mitigate activity at the network level. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Network segmentation can be used to isolate infrastructure components that do not require broad network access. This may mitigate, or at least alleviate, the scope of AiTM activity. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Utilize out-of-band communication to validate the integrity of data from the primary channel. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | To protect against AiTM, authentication mechanisms should not send credentials across the network in plaintext and should also implement mechanisms to prevent replay attacks (such as nonces or timestamps). Challenge-response based authentication techniques that do not directly send credentials over the network provide better protection from AiTM. |
| M0814 | [Static Network Configuration](https://attack.mitre.org/mitigations/M0814/) | Statically defined ARP entries can prevent manipulation and sniffing of switched network traffic, as some AiTM techniques depend on sending spoofed ARP messages to manipulate network host's dynamic ARP tables. |


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
    <td >DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Monitor application logs for changes to settings and other events associated with network protocols and other services commonly abused for AiTM.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor network traffic for anomalies associated with known AiTM behavior. For Collection activity where transmitted data is not manipulated, anomalies may be present in network management protocols (e.g., ARP, DHCP).</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor for network traffic originating from unknown/unexpected hosts. Local network traffic metadata (such as source MAC addressing) as well as usage of network management protocols such as DHCP may be helpful in identifying hardware. For added context on adversary procedures and background see Adversary-in-the-Middle and applicable sub-techniques.</td>
  </tr>
  <tr>
  <td >DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Host-based implementations of this technique may utilize networking-based system calls or network utility commands (e.g., iptables) to locally intercept traffic. Monitor for relevant process creation events.</td>
  </tr>

  <tr>
    <td >DS0019</td>
    <td>[Service](https://attack.mitre.org/datasources/DS0019/)</td>
    <td>[Service Creation](https://attack.mitre.org/datasources/DS0019/#Service%20Creation)</td>
    <td>Monitor for newly constructed services/daemons through Windows event logs for event IDs 4697 and 7045.</td>
  </tr>
  <tr>
    <td>DS0024</td>
    <td>[Windows Registry](https://attack.mitre.org/datasources/DS0024/)</td>
    <td>[Windows Registry Key Modification](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)</td>
    <td>Monitor HKLM\Software\Policies\Microsoft\Windows NT\DNSClient for changes to the "EnableMulticast" DWORD value. A value of "0" indicates LLMNR is disabled.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Adversary in the middle. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0830/).
2. [Procedure Examples: Validating Anomaly Detection Mechanisms In Industrial Control Systems. Retrieved 01JUL2024.](https://www.researchgate.net/publication/342732440_Validating_Anomaly_Detection_Mechanisms_In_Industrial_Control_Systems)
3. [Procedure Examples: Triton Safety Instrumented System Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0030/)
4. [Procedure Examples: VPNFilter. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1010/)
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
18. [Targeted Assets: Routers. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0014/)
19. [MITRE ATT&CK Mitigation: Audit](https://attack.mitre.org/mitigations/M0947/).
20. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
21. [MITRE ATT&CK Mitigation: Disable or Remove Feature or Program. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0942/)
22. [MITRE ATT&CK Mitigation: Network Intrusion Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0931/)
23. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
24. [MITRE ATT&CK Mitigation:Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/)
25. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
26. [MITRE ATT&CK Mitigation: Static Network Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0814/)
27. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
28. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
29. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
30. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
31. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
32. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/)
33. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
34. [MITRE ATT&CK Detection: Service](https://attack.mitre.org/datasources/DS0019/)
35. [MITRE ATT&CK Detection: Service Creation](https://attack.mitre.org/datasources/DS0019/#Service%20Creation)
36. [MITRE ATT&CK Detection: Windows Registry. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0024/)
37. [MITRE ATT&CK Detection: Windows Registry Key Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)