---
sidebar_label: 'Spearphishing Attachment'
sidebar_position: 3
---

# Spearphishing Attachment

# Summary
Adversaries may use a spearphishing attachment, a variant of spearphishing, as a form of social engineering attack against specific maritime targets. Spearphishing attachments are different from other forms of spearphishing in that they employ malware attached to an email. All forms of spearphishing are electronically delivered and target a specific individual, company, or industry. In this scenario, adversaries attach a file to the spearphishing email and usually rely upon User Execution to gain execution and access.

For example, a spearphishing campaign could target maritime organizations and their employees. The emails would be constructed with a high level of sophistication to convince crew members or port officials to open the malicious file attachments.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| P0001      | [Naval Dome exposes vessel vulnerabilities to cyber attack](https://www.seatrade-maritime.com/asia/naval-dome-exposes-vessel-vulnerabilities-cyber-attack) | The adversaries are able to gain access to critical systems on board a ship and manipulate a ship’s position, disable machinery, and delete radar targets. The attacks are possible because ships rely on outdated security measures. |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0949 | [Antivirus/Antimalware](https://attack.mitre.org/mitigations/M0949/) | Deploy anti-virus on all systems that support external email. |
| M0931 | [Network Intrusion Prevention](https://attack.mitre.org/mitigations/M0931/) | Network intrusion prevention systems and systems designed to scan and remove malicious email attachments can be used to block activity. |
| M0921 | [Restrict Web-Based Content](https://attack.mitre.org/mitigations/M0921/) | Consider restricting access to email within critical process environments. Additionally, downloads and attachments may be disabled if email is still necessary. |
| M0917 | [User Training](https://attack.mitre.org/mitigations/M0917/) | Users can be trained to identify social engineering techniques and spearphishing emails. |

&nbsp;

# Detection
| ID      | Data Source       | Data Components | Detects |
|:------------|:-----------|:--------------|:--------|
| DS0015 | [Application Log](https://attack.mitre.org/datasources/DS0015/) | [Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content) | Monitor mail server and proxy logs for evidence of messages originating from spoofed addresses, including records indicating failed DKIM+SPF validation or mismatched message headers. Anti-virus can potentially detect malicious documents and attachments as they're scanned to be stored on the email server or on the user's computer. |
| DS0022 | [File](https://attack.mitre.org/datasources/DS0022/) | [File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation) | Monitor for newly constructed files from a spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. |
| DS0029 | [Network Traffic](https://attack.mitre.org/datasources/DS0029/) | [Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content) | Monitor network traffic for suspicious email attachments. Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated to traffic patterns (e.g., monitor anomalies in use of files that do not normally initiate connections for respective protocol(s)). Use web proxies to review content of emails including sender information, headers, and attachments for potentially malicious content. |
| DS0009 | [Process](https://attack.mitre.org/datasources/DS0009/) | [Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation) | Monitor for suspicious descendant process spawning from Microsoft Office and other productivity software. For added context on adversary procedures and background see Spearphishing Attachment. |


&nbsp;

# References
1. [MITRE ATT&CK Technique: Spearphishing Attachment](https://attack.mitre.org/techniques/T0865/).
2. [Naval Dome exposes vessel vulnerabilities to cyber attack](https://www.seatrade-maritime.com/asia/naval-dome-exposes-vessel-vulnerabilities-cyber-attack).
3. [Europol Public Information: Port of Antwerp cyberattack](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf).
3. [https://link.springer.com/article/10.1057/s41278-023-00276-8#data-availability](https://link.springer.com/article/10.1057/s41278-023-00276-8).
3. [MITRE ATT&CK Technique: Spearphishing Attachment](https://attack.mitre.org/techniques/T0865/).
4. [MITRE ATT&CK Detection: Application Log](https://attack.mitre.org/datasources/DS0015/).
5. [MITRE ATT&CK Detection: Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content).
6. [MITRE ATT&CK Detection: File](https://attack.mitre.org/datasources/DS0022/).
7. [MITRE ATT&CK Detection: File Creation](https://attack.mitre.org/datasources/DS0022/#File%20Creation).
8. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
9. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content).
10. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/).
11. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
