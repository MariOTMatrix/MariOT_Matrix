---
sidebar_label: 'Wireless Compromise'
sidebar_position: 5
---

# Wireless Compromise

# Summary
Adversaries may perform wireless compromise as a method of gaining communications and unauthorized access to a maritime wireless network. Access to a wireless network may be gained through the compromise of a wireless device. Adversaries may also utilize radios and other wireless communication devices on the same frequency as the wireless network. Wireless compromise can be done as an initial access vector from a remote distance.

For example, an adversary could use a modified wireless device to gain access to and control over a ship's communication systems. The device would allow the adversary to interface with the ship's network to modify settings and override operator control. The adversary may accomplish this by aligning the device to the frequency and amplitude of the ship's wireless control protocol signals. The device then enables initial access to the network, allowing the capture and replay of control signals.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020/) |In the Maroochy Water Breach, the adversary used a two-way radio to communicate with and set the frequencies of Maroochy Shire's repeater stations. |

&nbsp;

# Targeted Assets
| ID      | Name       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Deploy anti-virus on all systems that support external email. |
| M0808 | [Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/) | Network intrusion prevention systems and systems designed to scan and remove malicious email attachments can be used to block activity. |
| M0806 | [Minimize Wireless Signal Propagation](https://attack.mitre.org/mitigations/M0806/) | Consider restricting access to email within critical process environments. Additionally, downloads and attachments may be disabled if email is still necessary. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Users can be trained to identify social engineering techniques and spearphishing emails. |

&nbsp;

# Detection
| ID      | Data Source       | Data Components | Detects |
|:------------|:-----------|:--------------|:--------|
| DS0015 | [Application Log](https://attack.mitre.org/datasources/DS0015/) | [Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content) | Monitor mail server and proxy logs for evidence of messages originating from spoofed addresses, including records indicating failed DKIM+SPF validation or mismatched message headers. Anti-virus can potentially detect malicious documents and attachments as they're scanned to be stored on the email server or on the user's computer. |
| DS0028 | [Logon Session](https://attack.mitre.org/datasources/DS0028/) | [Logon Session Creation](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation) | MMonitor login sessions for new or unexpected devices or sessions on wireless networks. |
| DS0029 | [Network Traffic](https://attack.mitre.org/datasources/DS0029/) | [Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow) | New or irregular network traffic flows may indicate potentially unwanted devices or sessions on wireless networks. In Wi-Fi networks monitor for changes such as rogue access points or low signal strength, indicating a device is further away from the access point then expected and changes in the physical layer signal. Network traffic content will provide important context, such as hardware (e.g., MAC) addresses, user accounts, and types of messages sent. |



&nbsp;

# References
1. [MITRE ATT&CK Technique: Wireless Compromise](https://attack.mitre.org/techniques/T0860/)
2. [MITRE ATT&CK Procedure Examples: Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020/)
3. [MITRE ATT&CK Targeted Asset: Workstation](https://attack.mitre.org/assets/A0001/)
4. [MITRE ATT&CK Targeted Asset: Field I/O](https://attack.mitre.org/assets/A0013/)
5. [MITRE ATT&CK Mitigation: Communication Authenticity](https://attack.mitre.org/mitigations/M0802/)
6. [MITRE ATT&CK Mitigation: Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/)
7. [MITRE ATT&CK Mitigation: Minimize Wireless Signal Propagation](https://attack.mitre.org/mitigations/M0806/)
8. [MITRE ATT&CK Mitigation: Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/)
9. [MITRE ATT&CK Detection: Application Log](https://attack.mitre.org/datasources/DS0015/)
10. [MITRE ATT&CK Detection: Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
11. [MITRE ATT&CK Detection: Logon Session](https://attack.mitre.org/datasources/DS0028/)
12. [MITRE ATT&CK Detection: Logon Session Creation](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)
13. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
14. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)


