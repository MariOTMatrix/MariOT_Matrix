---
id: authentication_logs
title: Authentication Logs
---

# Authentication Logs

Authentication logs in maritime environments OT record user access and identity verification activities in critical operational components, such as engineering workstations, HMI terminals and remote access gateways, including those employing satellite links (e.g., VSAT) [^5]. Each log entry typically includes metadata such as timestamp, source IP address, authentication method, and the privilege level associated with the account involved.

## Data Components

### Authentication Logs: User Login Events
Records authentication activities, including successful and failed login attempts, account lockouts, and password changes.These logs may be obtained via onboard SIEM deployments, remote maintenance software audit trails, or secure shell/serial console access configured on bridge systems.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0001      | [Abuse of Trusted Relationships](/docs/abuse_of_trusted_relationships)     | [Configuration management databases](https://www.microsoft.com/en-us/security/blog/2021/10/25/nobelium-targeting-delegated-administrative-privileges-to-facilitate-broader-attacks/)      |
| SS0002      | [Remote Maintenance Exploitation](/docs/remote_maintenance_exploitation)     | [Continuous Monitoring & Log Analysis](https://portswigger.net/daily-swig/when-the-screens-went-black-how-notpetya-taught-maersk-to-rely-on-resilience-not-luck-to-mitigate-future-cyber-attacks?)    |
| SS0006      | [Execution via GUI](/docs/execution_via_gui)     | [Configure intrusion detection systems](http://www.jfdc.cnic.cn/CN/Y2021/V3/I3/59) |
| SS0007      | [Hardcoded or Default Credentials](/docs/hardcoded_or_default_credentials)     | [Log analysis and anomaly detection](https://mp.weixin.qq.com/s?__biz=MzU3MzQyOTU0Nw==&mid=2247492991&idx=1&sn=9517fcd3799805dc752de89075d90a9b&chksm=fcc3673bcbb4ee2dd0dd22583a15b29cd0ee3f7588ae233acb264ea890d2bf73f985f6122a69&scene=58&subscene=0#rd) |




### Authentication Logs: VPN & Remote Access Sessions
These sessions enable shore-based technicians, OEM vendors, and classification societies to remotely access shipboard control systems, including navigation interfaces, power management consoles, and engine automation networks—often over VSAT or leased satellite links.

| ID      | Name       | 
|:------------|:-----------|
| SS0002      | [Remote Maintenance Exploitation](/docs/remote_maintenance_exploitation)     | 

##

# References
1. [A review of network intrusion detection based on deep learning. Retrieved March 27, 2025.](http://www.jfdc.cnic.cn/CN/Y2021/V3/I3/59)
2. [Industrial Control Network Security Landscape 2024 White Paper. Retrieved March 28, 2025.](https://mp.weixin.qq.com/s?__biz=MzU3MzQyOTU0Nw==&mid=2247492991&idx=1&sn=9517fcd3799805dc752de89075d90a9b&chksm=fcc3673bcbb4ee2dd0dd22583a15b29cd0ee3f7588ae233acb264ea890d2bf73f985f6122a69&scene=58&subscene=0#rd)
3. [Microsoft Threat Intelligence Center. (2021, October 25). NOBELIUM targeting delegated administrative privileges to facilitate broader attacks. Retrieved March 28, 2025.](https://www.microsoft.com/en-us/security/blog/2021/10/25/nobelium-targeting-delegated-administrative-privileges-to-facilitate-broader-attacks/)
4. [When the screens went black: How NotPetya taught Maersk to rely on resilience – not luck – to mitigate future cyber-attacks. Retrieved April 4, 2025.](https://portswigger.net/daily-swig/when-the-screens-went-black-how-notpetya-taught-maersk-to-rely-on-resilience-not-luck-to-mitigate-future-cyber-attacks?)
5. [Cyber-Physical Security Testbeds: Architecture, Application, and Evaluation for Smart Grid. Retrieved Junne 3, 2025.](https://ieeexplore.ieee.org/document/6473865)