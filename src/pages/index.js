import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`iTrust ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

      <div style={{ marginTop: '10px' }}></div>
      
      <p1>
      MariOT matrix outlines the evolution of attacker tactics used in maritime operations, progressing from left to right. Each column represents a tactic, and the corresponding maritime techniques used in those tactics are listed below. Click the green links to delve deeper into each technique. You can also explore and view maritime tactics and techniques using the links provided in the navigation bar at the top. This also allows you to compare these tactics alongside the established maritime security framework techniques.
      {/*<Link to="http://localhost:3000/">MariOT Matrix</Link>*/} </p1>
      <div style={{ marginBottom: '10px' }}></div>


    <div style={{ width: '98%', display: 'flex', margin: '0 auto', justifyContent: 'center' }}>
        <table >

          {/* 1st Row */}
          <tr style= {{textAlign:"center", fontWeight: "bold"}}>
            <td colspan="12" >Maritime Vessel</td>
            {/* <td colspan="2" >Port</td> */}
          </tr>

          {/* 2nd Row */}
          <tr style= {{textAlign:"center"}}>
            <td>Infiltration Design</td>
            <td>Execution</td>
            <td>Persistence</td>
            <td>Privilege Escalation</td>
            <td>Evasion</td>
            <td>Discovery</td>
            <td>Lateral Movement</td>
            <td>Collection</td>
            <td>Command and Control</td>
            <td colspan='2'>Impair Operational Integrity</td>
            <td>Impact</td>

            {/* <td>Item 1</td> */}
            {/* <td>Item 2</td> */}
          </tr>

          {/* 3rd Row */}
          <tr style= {{textAlign:"center"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/abuse_of_trusted_relationships">Abuse of Trusted Relationships</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/command_and_scripting_interpreter">Command and Scripting Interpreter</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/automated_task_execution">Automated Task Execution</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/exploitation_for_privilege_escalation">Exploitation for Privilege Escalation</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/ais_spoofing">AIS Spoofing</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/network_connection_enumeration">Network Connection Enumeration</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/default_credentials">Default Credentials</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/adversary_in_the_middle">Adversary in the middle</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/standard_application_layer_protocol">Standard Application Layer Protocol</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/alarm_suppression">Alarm Suppression</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/signal_manipulation">Signal Manipulation for<br/>Radar Systems</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/damage_to_property">Damage to Property</Link></td>
          </tr>

          {/* 4th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/drive_by_compromise">Drive-by Compromise</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/execution_via_gui">Execution via GUI</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/configuration_hijacking">Configuration Hijacking</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/hardcoded_or_default_credentials">Hardcoded or Default Credentials</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/spoof_reporting_message">Spoof Reporting Message</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/network_sniffing">Network Sniffing</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/exploitation_of_remote_services">Exploitation of Remote Services</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/automated_collection">Automated Collection</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/block_command_message">Block Command Message</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/automatic_identification_system">AIS Exploitation</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/denial_of_control">Denial of Control</Link></td>
          </tr>

          {/* 5th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/infiltration_through_removable_media">Infiltration Through<br/>Removable Media</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/native_api_execution">Native API Execution</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/module_firmware">Module Firmware</Link></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/wireless_sniffing">Wireless Sniffing</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/program_download">Program Download</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/data_from_local_system">Data from Local System</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/block_reporting_message">Block Reporting Message</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/global_positioning_system">GPS Spoofing</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/denial_of_view">Denial of View</Link></td>
          </tr>

          {/* 6th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/remote_maintenance_exploitation">Remote Maintenance Exploitation</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/user_execution">User Execution</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/system_firmware">System Firmware</Link></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/remote_services">Remote Services</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/io_image">I/O Image</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/change_credential">Change Credential</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/false_data_injection">False Data Injection</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_availability">Loss of Availability</Link></td>
          </tr>

          {/* 7th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/site_infiltration">Site Infiltration</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/valid_accounts">Valid Accounts</Link></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/valid_accounts">Valid Accounts</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/monitor_process_state">Monitor Process State</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/data_destruction">Data Destruction</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/replay_attack">Replay Attack</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_control">Loss of Control</Link></td>
          </tr>

          {/* 8th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/spearphishing_attachment">Spearphishing Attachment</Link></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/point_&_tag_identification">Point & Tag Identification</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/denial_of_service">Denial of Service</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/sensact_manipulation">SensAct Manipulation</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_productivity_and_revenue">Loss of Productivity and Revenue</Link></td>
          </tr>

          {/* 9th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/supply_chain_compromise">Supply Chain Compromise</Link></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/program_upload">Program Upload</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/device_restart_shutdown">Device Restart/Shutdown</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/generation_system_attack">Generation System Attack</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_protection">Loss of Protection</Link></td>
          </tr>

          {/* 10th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/wireless_compromise">Wireless Compromise</Link></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/screen_capture">Screen Capture</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/manipulate_io_image">Manipulate I/O Image</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/distribution_system_attack">Distribution System Attack</Link></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_safety">Loss of Safety</Link></td>
          </tr>

          {/* 11th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/modify_alarm_settings">Modify Alarm Settings</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/loss_of_view">Loss of View</Link></td>
          </tr>
          {/* 12th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/service_stop">Service Stop</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/manipulation_of_control">Manipulation of Control</Link></td>
          </tr>
          {/* 13th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/brute_force_io">Brute Force I/O</Link></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/manipulation_of_view">Manipulation of View</Link></td>
          </tr>
          {/* 14th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/modify_parameter">Modify Parameter</Link></td>
            <td></td>
            <td></td>
          </tr>
          {/* 15th Row */}
          <tr style= {{textAlign:"center", emptyCells: "hide", background: "none"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td style={{ cursor: 'pointer' }}><Link to="/docs/unauthorized_command_message">Unauthorized Command Message</Link></td>
            <td></td>
            <td></td>
          </tr>


          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/* */}
          {/**/}
          {/**/}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/infiltration_through_removable_media">Infiltration Through<br/>Removable Media</Link></td> */}
          {/**/}
          {/**/}
          {/**/}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/radio_communications">Radio Communications</Link></td> */}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/satellite_communications">Satellite Communications<br/>(SATCOM)</Link></td> */}
          {/*<td>Global Maritime Distress &<br/>Safety System (GMDSS)</td> */}
          {/*<td>Internal Communication<br/>Systems</td> */}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/fuel_injection_manipulation">Fuel Injection<br/>Manipulation</Link></td> */}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/knocking_controller_compromise">Knocking Controller<br/>Compromise</Link></td> */}
          {/*<td style={{ cursor: 'pointer' }}><Link to="/docs/oil_pressure_data_tampering">Oil Pressure<br/>Data Tampering</Link></td> */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}
          {/* */}


        </table>
      </div>

        <HomepageFeatures />
        </main>
    </Layout>
  );
}
