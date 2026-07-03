---
sidebar_label: 'I/O Image'
sidebar_position: 22
---

# I/O Image

# Summary
Adversaries may seek to capture process values related to the inputs and outputs of a ship's PLC. During the scan cycle, a PLC on a vessel reads the status of all inputs and stores them in an image table. The image table is the PLC's internal storage location where values of inputs/outputs for one scan are stored while it executes the user program. After the PLC has solved the entire logic program, it updates the output image table. The contents of this output image table are written to the corresponding output points in I/O Modules.

The Input and Output Image tables described above make up the I/O Image on a ship's PLC. This image is used by the user program instead of directly interacting with physical I/O.

Adversaries may collect the I/O Image state of a ship's PLC by utilizing a device's Native API to access the memory regions directly. The collection of the PLC's I/O state could be used to replace values or inform future stages of an attack.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Stuxnet copies the input area of an I/O image into data blocks with a one second interval between copies, forming a 21 second recording of the input area. The input area contains information being passed to the PLC from a peripheral. For example, the current state of a valve or the temperature of a device. |

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
    <td>DS0039</td>
    <td>[Asset](https://attack.mitre.org/datasources/DS0039/)</td>
    <td>[Software](https://attack.mitre.org/datasources/DS0039/#Software)</td>
    <td>Collecting information from the I/O image requires analyzing the application program running on the PLC for specific data block reads. Detecting this requires obtaining and analyzing a PLC’s application program, either directly from the device or from asset management platforms.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: I/O Image. Retrieved 01JUL2024. ](https://attack.mitre.org/techniques/T0877/).
2. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
3. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
4. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
5. [MITRE ATT&CK Mitigation: Mitigation Limited or Not Effective. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0816/)
6. [MITRE ATT&CK Detection: Asset](https://attack.mitre.org/datasources/DS0039/)
7. [MITRE ATT&CK Detection: Software](https://attack.mitre.org/datasources/DS0039/#Software)