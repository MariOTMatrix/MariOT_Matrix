---
sidebar_label: 'Denial of Service'
sidebar_position: 33
---

# Denial of Service

# Summary
Adversaries may perform Denial-of-Service (DoS) attacks to disrupt expected vessel functionality. Examples of DoS attacks include overwhelming the target maritime system with a high volume of requests in a short time period and sending the target system a request it does not know how to handle. Disrupting system state may temporarily render it unresponsive, possibly lasting until a reboot can occur. When placed in this state, maritime systems may be unable to send and receive requests, and may not perform expected response functions in reaction to other events in the environment.

Some maritime control systems are particularly sensitive to DoS events, and may become unresponsive in reaction to even a simple ping sweep. Adversaries may also attempt to execute a Permanent Denial-of-Service (PDoS) against certain systems, such as in the case of the BrickerBot malware.

Adversaries may exploit a software vulnerability to cause a denial of service by taking advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. Vulnerabilities may exist in maritime software that can be used to cause a denial of service condition.

Adversaries may have prior knowledge about maritime communication protocols or control systems used on vessels through Remote System Information Discovery. There are examples of adversaries remotely causing a System Restart/Shutdown by exploiting a vulnerability that induces uncontrolled resource consumption.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028) | During the 2015 Ukraine Electric Power Attack, power company phone line operators were hit with a denial of service attack so that they couldn’t field customers’ calls about outages. Operators were also denied service to their downstream devices when their serial-to-ethernet converters had their firmware overwritten, which bricked the devices. |
| S0093 | [Backdoor.Oldrea](https://attack.mitre.org/software/S0093/) | The Backdoor.Oldrea payload has caused multiple common OPC platforms to intermittently crash. This could cause a denial of service effect on applications reliant on OPC communications. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | The Industroyer SIPROTEC DoS module exploits the CVE-2015-5374 vulnerability in order to render a Siemens SIPROTEC device unresponsive. Once this vulnerability is successfully exploited, the target device stops responding to any commands until it is rebooted manually. Once the tool is executed it sends specifically crafted packets to port 50,000 of the target IP addresses using UDP. The UDP packet contains the following 18 byte payload: 0x11 49 00 00 00 00 00 00 00 00 00 00 00 00 00 00 28 9E. |
| S1006 | [PLC-Blaster](https://attack.mitre.org/software/S1006/) | The execution on the PLC can be stopped by violating the cycle time limit. The PLC-Blaster implements an endless loop triggering an error condition within the PLC with the impact of a DoS. |
| C0031 | [Unitronics Defacement Campaign](https://attack.mitre.org/campaigns/C0031/) | During the Unitronics Defacement Campaign, the CyberAv3ngers defaced controllers’ Human-Machine Interface (HMI), which prevented multiple entities from being able to operate their devices normally. Additionally, the CyberAv3ngers caused a communications failure in a remote pumping station. |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0815 | [Watchdog Timers](https://attack.mitre.org/mitigations/M0815/) | System and process restarts should be performed when a timeout condition occurs. |

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
    <td>Monitor for application logging, messaging, and/or other artifacts that may result from Denial of Service (DoS) attacks which degrade or block the availability of services to users. In addition to network level detections, endpoint logging and instrumentation can be useful for detection.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor and analyze traffic patterns and packet inspection associated to protocol(s) that do not follow the expected protocol standards and traffic flows (e.g., extraneous packets that do not belong to established flows, gratuitous or anomalous traffic patterns, anomalous syntax, or structure). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated to traffic patterns (e.g., monitor anomalies in use of files that do not normally initiate connections for respective protocol(s)).</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor network data for uncommon data flows. Processes utilizing the network that do not normally have network communication or have never been seen before are suspicious.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Monitor operational data for indicators of temporary data loss which may indicate a Denial of Service. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
</table>

&nbsp;

# References
1. [MITRE ATT&CK Technique: Denial of Service. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0814/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Backdoor.Oldrea. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0093/)
4. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
5. [Procedure Examples: PLC-Blaster. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1006/)
6. [Procedure Examples: Unitronics Defacement Campaign. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0031/)
7. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
8. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
9. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
10. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
11. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
12. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
13. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
14. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
15. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
16. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
17. [MITRE ATT&CK Mitigation: Watchdog Timers. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0815/)
18. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
19. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
20. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
21. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
22. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
23. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
24. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)
25. [Network Attacks Against Marine Radar Systems: A Taxonomy, Simulation Environment, and Dataset. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/9843801)
26. [A narrative perspective of island detection methods under the lens of cyber-attack in data-driven smart grid. Retrieved 01JUL2024.](https://jesit.springeropen.com/articles/10.1186/s43067-023-00083-4)
27. [Attacking (and Defending) the Maritime Radar System. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/10142209)
