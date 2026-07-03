---
sidebar_label: 'Screen Capture'
sidebar_position: 26
---

# Screen Capture

# Summary
Adversaries may attempt to perform screen capture of devices in the maritime control system environment. Screenshots may be taken of workstations, HMIs, or other devices that display environment-relevant process, device, reporting, alarm, or related data. These device displays may reveal information regarding the maritime process, layout, control, and related schematics. In particular, an HMI can provide a lot of important maritime process information. Analysis of screen captures may provide the adversary with an understanding of intended operations and interactions between critical devices on the vessel.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| G1000 | [ALLANITE](https://attack.mitre.org/groups/G1000/) | ALLANITE has been identified to collect and distribute screenshots of ICS systems such as HMIs. |
| G0064 | [APT33](https://attack.mitre.org/groups/G0064/) | APT33 utilize backdoors capable of capturing screenshots once installed on a system. |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0816 | [Mitigation Limited or Not Effective](https://attack.mitre.org/mitigations/M0816/) | Preventing screen capture on a device may require disabling various system calls supported by the operating systems (e.g., Microsoft WindowsGraphicsCaputer APIs), however, these may be needed for other critical applications. |


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
    <td>DS0022</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor executed commands and arguments that may attempt to take screen captures of the desktop to gather information over the course of an operation.</td>
  </tr>
  <tr>
  <td >DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)</td>
    <td>Monitoring for screen capture behavior will depend on the method used to obtain data from the operating system and write output files. Detection methods could include collecting information from unusual processes using API calls used to obtain image data, and monitoring for image files written to disk, such as CopyFromScreen, xwd, or screencapture. The data may need to be correlated with other events to identify malicious activity, depending on the legitimacy of this behavior within a given network environment.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Screen Capture. Retrieved 01JUL2024. ](https://attack.mitre.org/techniques/T0852/).
2. [Procedure Examples: ALLANITE. Retrieved 01JUL2024.](https://attack.mitre.org/groups/G1000/)
3. [Procedure Examples: APT33. Retrieved 01JUL2024.](https://attack.mitre.org/groups/G0064/)
4. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
5. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
6. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
7. [MITRE ATT&CK Mitigation: Mitigation Limited or Not Effective. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0816/)
8. [MITRE ATT&CK Detection: Command. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/)
9. [MITRE ATT&CK Detection: Command Execution. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
10. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
11. [MITRE ATT&CK Detection: OS API Execution. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)

