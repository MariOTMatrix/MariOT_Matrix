---
id: serial_communication
title: Serial Communication Logs
---

# Serial Communication Logs

Serial communication logs in maritime environments OT record data exchanged over legacy serial interfaces that are still widely used in shipboard systems. These logs capture protocol-level traffic based on standards such as NMEA 0183[^1], Modbus RTUs, and IEC 61162-1/2. Such protocols are commonly implemented on devices including GPS receivers, AIS transponders, engine governors, and autopilot controllers. Serial links are typically used for navigation support, propulsion system monitoring, and sensor integration. Their continued use is attributed to the simplicity of architectural design and the long-established reliability in deterministic maritime operations.

## Data Components

### AIS Type 8 Message Content
| ID      | Name       | 
|:------------|:-----------|
| SS0020    | [Standard Application Layer Protocol](/docs/standard_application_layer_protocol)        | 

### Sender MMSI
| ID      | Name       | 
|:------------|:-----------|
| SS0021    | [Standard Application Layer Protocol](/docs/standard_application_layer_protocol)        | 

### Malformed AIS Message Structure
| ID      | Name       | 
|:------------|:-----------|
| SS0022    | [AIS Exploitation](/docs/automatic_identification_system)        | 

### Unexpected Type 8 Frequency
| ID      | Name       | 
|:------------|:-----------|
| SS0023    | [AIS Exploitation](/docs/automatic_identification_system)        | 

### Serial data duplication
| ID      | Name       | 
|:------------|:-----------|
| SS0030    | [Automated Collection](/docs/automated_collection)        | 

### Port access attempts
| ID      | Name       | 
|:------------|:-----------|
| SS0031    | [Automated Collection](/docs/automated_collection)        | 

### Unencrypted AIS/NMEA data
| ID      | Name       | 
|:------------|:-----------|
| SS0032    | [Automated Collection](/docs/automated_collection)        | 

### message transmission time
| ID      | Name       | 
|:------------|:-----------|
| SS0033    | [Standard Application Layer Protocol](/docs/standard_application_layer_protocol)        | 

### Payload Entropy Anomaly
| ID      | Name       | 
|:------------|:-----------|
| SS0034    | [AIS Exploitation](/docs/ais_exploitation)        | 


# References
1. [NMEA 0183 Standard. Retrieved June 3, 2025.](https://tronico.fi/OH6NT/docs/NMEA0183.pdf)
