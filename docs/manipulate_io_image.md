---
sidebar_label: 'Manipulate I/O Image'
sidebar_position: 35
---

# Manipulate I/O Image

# Summary
Adversaries may manipulate the I/O image of maritime control systems through various means to prevent them from functioning as expected. Methods of I/O image manipulation may include overriding the I/O table via direct memory manipulation or using the override function used for testing control system programs. During the scan cycle, a maritime control system reads the status of all inputs and stores them in an image table. The image table is the system's internal storage location where values of inputs/outputs for one scan are stored while it executes the user program. After the system has solved the entire logic program, it updates the output image table. The contents of this output image table are written to the corresponding output points in I/O Modules.

One of the unique characteristics of maritime control systems is their ability to override the status of a physical discrete input or to override the logic driving a physical output coil and force the output to a desired status.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1006 | [PLC-Blaster](https://attack.mitre.org/software/S1006/) | PLC-Blaster may manipulate any outputs of the PLC. Using the POU POKE any value within the process image may be modified. |
| S0603 | [Stuxnet](https://attack.mitre.org/software/S0603) | When the peripheral output is written to, sequence C intercepts the output and ensures it is not written to the process image output. The output is the instructions the PLC sends to a device to change its operating behavior. By intercepting the peripheral output, Stuxnet prevents an operator from noticing unauthorized commands sent to the peripheral.  |


&nbsp;


# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |


&nbsp;


# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0816 | [Mitigation Limited or Not Effective](https://attack.mitre.org/mitigations/M0816/) | This technique may not be effectively mitigated against, consider controls for assets and processes that lead to the use of this technique. |


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
    <td >DS0039</td>
    <td>[Asset](https://attack.mitre.org/datasources/DS0039/)</td>
    <td>[Software](https://attack.mitre.org/datasources/DS0039/#Software)</td>
    <td>A manipulated I/O image requires analyzing the application program running on the PLC for specific data block writes. Detecting this requires obtaining and analyzing a PLC’s application program, either directly from the device or from asset management platforms.</td>
  </tr>

</table>

&nbsp;

# References
1. [MITRE ATT&CK Technique: Manipulate I/O Image. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0835/)
2. [Procedure Examples: PLC-Blaster. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1006/)
3. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0603)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
6. [MITRE ATT&CK Mitigation: Mitigation Limited or Not Effective. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0816/)
7. [MITRE ATT&CK Detection: Asset. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039/)
8. [MITRE ATT&CK Detection: Software. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0039/#Software)