import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../config";
import Head from "next/head";
import { useRouter } from "next/router";
function Backups({ }) {
    const router = useRouter();
    return (
        <main>
            <section className="inner_hero_sec padding-top padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>Introducing Backups</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-sec padding-top ">
                <div className="container">
                    <div className="row" style={{ marginTop: "10px", justifyContent: "center" }}>
                        <div className="col-md-8">
                            <div
                                className="heading"
                                style={{
                                    background: "#f0f8ff", // Lighter background for a fresher look
                                    padding: "2px",
                                    borderRadius: "12px", // Slightly rounder edges
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Stronger shadow for depth
                                    color: "#333",
                                    marginBottom: '20px', // Increased space at the bottom
                                    textAlign: "center",
                                }}
                            >
                                <h2 style={{
                                    fontFamily: "'Lora', serif", // A more elegant font
                                    fontWeight: "400", // Slightly bolder font for better readability
                                    fontSize: "15px", // Slightly bigger font size
                                    lineHeight: "1.6", // Better line spacing
                                    color: '#333', // Keeping the text dark for good contrast
                                    letterSpacing: "0.5px", // Adds slight spacing between letters
                                    textTransform: "capitalize", // Capitalize important words for emphasis
                                }}>
                                    Backup players are used to replace unavailable or unannounced players in your team. Substitutions are made based on the priority order you set: B1 (highest priority) {'>'} B2{'>'} B3{'>'} B4 (lowest priority).
                                    <br />The replacements are role-specific: an all-rounder replaces an all-rounder, a bowler replaces a bowler, a wicketkeeper replaces a wicketkeeper, and a batter replaces a batter.
                                </h2>
                            </div>

                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Which players in your team can be replaced?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                <p>
                                                    Only unannounced and substitute players are eligible for replacement
                                                </p>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            In which order will the players be replaced?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <li>
                                                If multiple players are eligible for replacement, Backups will replace them in the following order:
                                            </li>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>Unannounced Captain</li>
                                                <li>Unannounced Vice Captain</li>
                                                <li>Other unannounced players*</li>
                                                <li>Substitute Captain</li>
                                                <li>Substitute Vice Captain</li>
                                                <li>Other substitute players*</li>
                                            </ul>

                                            <p>
                                                <em>* Players in your team with the highest credit will be replaced first.</em>
                                            </p>
                                            <p>
                                                <em>* For more than one player in your team with the same credits, the player that comes first in the alphabetical order is replaced first.</em>
                                            </p>
                                            <li>
                                                Backups who replace the Captain (C) or Vice Captain (VC) would become the new Captain or Vice Captain respectively.
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Which Backups replace players in your team?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">





                                            <li>Only announced and substitute Backups can replace players in your team. </li>
                                            <li> Announced Backups will be given higher priority than Substitute Backups.</li>


                                            <li>
                                                Amongst the Announced and Substitute Backups, replacements will happen as per the priority chosen by you.
                                            </li>

                                            <li>
                                                Replacement takes place sequentially based on the ‘Final Replacement Order’ as per team creation rules. Example:
                                            </li>
                                            <br />
                                            <table
                                                style={{
                                                    borderCollapse: 'collapse',
                                                    backgroundColor: '#f0f8ff', // Same background color
                                                    margin: '0 auto', // Centers the table
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow for better appearance
                                                    width: '80%',  // Adjusted table width
                                                    // borderRadius: '15px',  // Rounded corners
                                                }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                // borderTopLeftRadius: '10px',
                                                                // borderTopRightRadius: '10px',
                                                                backgroundColor: '#b0e0e6', // Slightly darker background for header
                                                            }}
                                                        >
                                                            Backup Priority
                                                        </th>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                backgroundColor: '#b0e0e6',
                                                            }}
                                                        >
                                                            Player Name
                                                        </th>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                backgroundColor: '#b0e0e6',
                                                            }}
                                                        >
                                                            Lineup Status
                                                        </th>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                // borderTopRightRadius: '10px',
                                                                backgroundColor: '#b0e0e6',
                                                            }}
                                                        >
                                                            Final Replacement Order
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            B1
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Virat Kohli
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            1
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            B2
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Rohit Sharma
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Substitute
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            B3
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Ravindra Jadeja
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Unannounced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            NA
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            B4
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            KL Rahul
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            2
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                            <br />

                                            <p>
                                                <strong>Final Replacement Order:</strong> Virat Kohli {'>'} KL Rahul {'>'}Rohit Sharma
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            When do the replacements happen?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                <p>
                                                    At the match deadline
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="false"
                                            aria-controls="collapse44"
                                        >
                                            What is a valid Backup replacement?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <table
                                                style={{
                                                    borderCollapse: 'collapse',
                                                    backgroundColor: '#f0f8ff',  // Stylish light blue background
                                                    margin: '0 auto',
                                                    width: '80%',  // Increased table width
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                    // borderRadius: '15px', // Rounded corners
                                                }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                // borderTopLeftRadius: '10px',
                                                                // borderTopRightRadius: '10px',
                                                                backgroundColor: '#b0e0e6', // Stylish header background
                                                            }}
                                                        >
                                                            Team Player
                                                        </th>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                backgroundColor: '#b0e0e6',
                                                            }}
                                                        >
                                                            Backup
                                                        </th>
                                                        <th
                                                            style={{
                                                                border: '1px solid grey',
                                                                padding: '12px',
                                                                textAlign: 'center',
                                                                backgroundColor: '#b0e0e6',
                                                            }}
                                                        >
                                                            Replacement
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Unannounced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'green' }}>
                                                            ✓
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Unannounced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Substitute
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'green' }}>
                                                            ✓
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Substitute
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'green' }}>
                                                            ✓
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Substitute
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Substitute
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'red' }}>
                                                            ✘
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Unannounced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Unannounced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'red' }}>
                                                            ✘
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center' }}>
                                                            Announced
                                                        </td>
                                                        <td style={{ border: '1px solid grey', padding: '12px', textAlign: 'center', color: 'red' }}>
                                                            ✘
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="false"
                                            aria-controls="collapse55"
                                        >
                                            Any other important points to consider while choosing your Backups?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                <ol style={{ listStyleType: 'disc' }}>
                                                    <li>All Backup replacements follow the Team Creation Rules. There are no constraints related to credit, player type, or same team when adding Backups, but Backup replacements will occur only if the team creation rules are followed.</li>
                                                    <li>An unannounced or substitute player can be replaced with a Backup of a different Player Type. For example, an all-rounder can replace a batter, but only if the team creation rules are adhered to.</li>
                                                    <li>Adding Backups to a team is recommended but <strong>completely optional</strong>.</li>
                                                    <li>If Backup replacements result in duplicate teams (applicable only if you have created multiple teams), the Backup replacements for that team will be canceled. In such cases, the team will remain unchanged after the match deadline.</li>
                                                    <li><strong>Example:</strong> You created two teams, T1 and T2. At the match deadline, we will check T1 for valid replacements. If T1 becomes identical to T2 as a result, no Backup replacements will be applied to T1.</li>
                                                    <li>If lineups are not available on MyMaster11 by the match deadline, no Backup replacements will be made for that match.</li>
                                                    <li>Backup replacements will occur for a match only if a minimum of 7 players from each squad are officially announced.</li>
                                                    <li>Players marked as unannounced or substitutes at the match deadline on MyMaster11 will be eligible for Backup replacements.</li>
                                                    <li>Backups will be made based on the lineups available <strong>only at the match deadline on MyMaster11.</strong> Any changes to a player's lineup status after the deadline will not be reflected in your team.</li>
                                                    <li>MyMaster11 relies on live data provided by third-party services. MyMaster11 is not responsible for any inaccuracies in the information received.</li>
                                                    <li><strong>Using Backups does not guarantee any winnings.</strong> Replacements will occur based on the replacement rules at the match deadline on MyMaster11.</li>
                                                    <li><strong>Backups are not included when sharing teams.</strong> Only the 11 players currently in the team will be shared. If the team is shared after the match deadline but before the Backup replacement occurs, the shared team will include only 11 players without any Backup replacements.</li>
                                                </ol>


                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Backups;

