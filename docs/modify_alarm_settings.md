---
sidebar_label: 'Modify Alarm Settings'
sidebar_position: 36
---

# Modify Alarm Settings

# Summary
Adversaries may modify alarm settings to prevent alerts that may inform vessel operators of their presence or to prevent responses to dangerous and unintended scenarios. Reporting messages are a standard part of data acquisition in maritime control systems. Reporting messages are used as a way to transmit system state information and acknowledgements that specific actions have occurred. These messages provide vital information for the management of a vessel's operations, and keep operators, engineers, and administrators aware of the state of system devices and physical processes.

If an adversary is able to change the reporting settings, certain events could be prevented from being reported. This type of modification can also prevent operators or systems from performing actions to keep the vessel in a safe state. If critical reporting messages cannot trigger these actions, then an impact could occur.

In maritime environments, the adversary may have to use Alarm Suppression or contend with multiple alarms and/or alarm propagation to achieve a specific goal to evade detection or prevent intended responses from occurring. Methods of suppression often rely on modification of alarm settings, such as modifying in-memory code to fixed values or tampering with assembly level instruction code.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary disabled alarms at four pumping stations, preventing notifications to the central computer. |



&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. |
| M0800 | [Authorization Enforcement](https://attack.mitre.org/mitigations/M0800/) | Only authorized personnel should be able to change settings for alarms. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | All field controllers should require users to authenticate for all remote or local management sessions. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational network and systems to restrict access to critical system functions to predetermined management systems. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | AAuthenticate connections fromsoftware and devices to prevent unauthorized systems from accessing protected management functions. |
| M0918 | [User Account Management](https://attack.mitre.org/mitigations/M0918/) | Limit privileges of user accounts and groups so that only designated administrators or engineers can interact with alarm management and alarm configuration thresholds. |


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
    <td>DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Monitor ICS asset application logs that indicate alarm settings have changed, although not all assets will produce such logs.</td>
  </tr>
  <tr>
    <td>DS0039</td>
    <td>[Asset](https://attack.mitre.org/datasources/DS0039/)</td>
    <td>[Asset Inventory](https://attack.mitre.org/datasources/DS0039/#Asset%20Inventory)</td>
    <td>Monitor ICS asset application logs that indicate alarm settings have changed, although not all assets will produce such logs.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor for alarm setting changes observable in automation or management network protocols.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Data about the industrial process may indicate it is operating outside of expected bounds and could help indicate that that an alarm setting has changed. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
</table>

&nbsp;

# References
1. [MITRE ATT&CK Technique: Denial of Service. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0814/)
2. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
3. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
6. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
7. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
8. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
9. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
10. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800)
11. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
12. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
13. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
14. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
15. [MITRE ATT&CK Mitigation: User Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0918/)
16. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
17. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
18. [MITRE ATT&CK Detection: Asset. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039)
19. [MITRE ATT&CK Detection: Asset Inventory. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039/#Asset%20Inventory)
20. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
21. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
22. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
23. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
