---
sidebar_label: 'Modify Parameter'
sidebar_position: 39
---

# Modify Parameter

# Summary
Adversaries may modify parameters used to instruct maritime control system devices. These devices operate via programs that dictate how and when to perform actions based on such parameters. These parameters can determine the extent to which an action is performed and may specify additional options. For example, a program on a control system device dictating engine processes may take a parameter defining the total number of seconds to run that engine.

An adversary can potentially modify these parameters to produce an outcome outside of what was intended by the ship operators. By modifying system and process-critical parameters, the adversary may cause impact to equipment and/or control processes. Modified parameters may be turned into dangerous, out-of-bounds, or unexpected values from typical operations. For example, specifying that a process run for more or less time than it should, or dictating an unusually high, low, or invalid value as a parameter.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can use the HTTP CGI scripts on Omron PLCs to modify parameters on EtherCat connected servo drives. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 modifies specified Information Object Addresses (IOAs) for specified Application Service Data Unit (ASDU) addresses to either the ON or OFF state. |
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary gained remote computer access to the control system and altered data so that whatever function should have occurred at affected pumping stations did not occur or occurred in a different way. The software program installed in the laptop was one developed for changing configurations in the PDS computers. This ultimately led to 800,000 liters of raw sewage being spilled out into the community. |
| S0603	| [Stuxnet](https://attack.mitre.org/software/S0603/) | In states 3 and 4 Stuxnet sends two network bursts (done through the DP_SEND primitive). The data in the frames are instructions for the frequency converter drives. For example one of the frames contains records that change the maximum frequency (the speed at which the motor will operate). The frequency converter drives consist of parameters, which can be remotely configured via Profibus. One can write new values to these parameters changing the behavior of the device. |


&nbsp;


# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0003 | [Programmable Logic Controller (PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |


&nbsp;


# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Provide the ability to verify the integrity and authenticity of changes to parameter values. |
| M0800 | [Authorization Enforcement](https://attack.mitre.org/mitigations/M0800/) | All field controllers should restrict the modification of parameter values to only certain users (e.g., engineers, field technician), preferably through implementing a role-based access mechanism. They should also restrict online edits and enable write protection for parameters. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | All field controllers should require that user authenticate for all remote or local management sessions. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0818 | [Validate Program Inputs](https://attack.mitre.org/mitigations/M0818/) | Devices and programs should validate the content of any remote parameter changes, including those from HMIs, control servers, or engineering workstations. |


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
    <td>Monitor device application logs parameter changes, although not all devices will produce such logs.</td>
  </tr>
  <tr>
    <td>DS0039</td>
    <td>[Asset](https://attack.mitre.org/datasources/DS0039/)</td>
    <td>[Asset Inventory](https://attack.mitre.org/datasources/DS0039/#Asset%20Inventory)</td>
    <td>Monitor asset management systems for device configuration changes which can be used to understand expected parameter settings.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor ICS management protocols for parameter changes, including for unexpected values, changes far exceeding standard values, or for parameters being changed in an unexpected way (e.g., via a new function, at an unusual time).</td>
  </tr>

  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Device Alarm](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)</td>
    <td>Monitor for device alarms produced when parameters are changed, although not all devices will produce such alarms.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Modify Parameter. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0836/)
2. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
3. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
4. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
5. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0603/)
6. [Targeted Assets: Programmable Logic Controller (PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
7. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
8. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
9. [MITRE ATT&CK Mitigation: Audit. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0947/)
10. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800)
11. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804)
12. [MITRE ATT&CK Mitigation: Validate Program Inputs. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0818)
13. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
14. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
15. [MITRE ATT&CK Detection: Asset. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039/)
16. [MITRE ATT&CK Detection: Asset Inventory. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039/#Asset%20Inventory)
17. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
18. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
19. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
20. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)

