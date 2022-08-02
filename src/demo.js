import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./styles.css";

const columns = [
  //{ field: 'unternehmen', headerName: 'Unternehmen', width: 260 },
  { field: 'unternehmen', headerName: 'Unternehmen', renderCell: (params) => <a href="{params.row.web}">{params.row.unternehmen}</a>, width: 260, },
  { field: 'land', headerName: 'Land', width: 50 },
  { field: 'plz', headerName: 'PLZ', width: 80 },
  { field: 'standort', headerName: 'Standort', width: 100 },
  //{ field: 'web', headerName: 'Web', renderCell: (params) => <a href="{params.row.web}">{params.row.web}</a>, width: 170, },
  //{ field: 'web', headerName: 'Web', renderCell: (params) => <a href="{params.row.web}">Link</a>, width: 55, },
  { field: 'zertifizierung', headerName: 'Zertifizierung', type: 'boolean', width: 100 },
  { field: 'lca', headerName: 'LCA', type: 'boolean', width: 55 },
  { field: 'lcc', headerName: 'LCC', type: 'boolean', width: 55 },
  { field: 'simulation', headerName: 'Simulation', type: 'boolean', width: 90 },
  { field: 'monitoring', headerName: 'Monitoring', type: 'boolean', width: 90 },
  { field: 'energietechnik', headerName: 'Energieberatung', type: 'boolean', width: 120 },
  { field: 'clima', headerName: 'Klimaadaption', type: 'boolean', width: 110 },
  { field: 'umwelttechnik', headerName: 'Umwelttech.', type: 'boolean', width: 100 },
  { field: 'bauphysik', headerName: 'Therm Bauphysik', type: 'boolean', width: 130 },
  { field: 'schallschutz', headerName: 'Schallschutz', type: 'boolean', width: 100 },
  { field: 'akustik', headerName: 'Akustik', type: 'boolean', width: 65 },
  { field: 'tga', headerName: 'TGA', type: 'boolean', width: 55 },
  { field: 'sanierung', headerName: 'Sanierung', type: 'boolean', width: 90 },
  { field: 'fassade', headerName: 'Fassadentech.', type: 'boolean', width: 110 },
  { field: 'brandschutz', headerName: 'Brandschutz', type: 'boolean', width: 110 },
  //{ field: 'ansprechperson', headerName: 'Kontakt', width: 140 },
  { field: 'email', headerName: 'Kontakt', renderCell: (params) => <a href="{params.row.email}">{params.row.ansprechperson}</a>, width: 175 },
  //{ field: 'email', headerName: 'E-Mail', renderCell: (params) => <a href="{params.row.email}">{params.row.email}</a>, width: 230 },
];

const rowsPlanung = [
  { id: 101, unternehmen: 'Drees & Sommer SE', land: 'D', plz: '60326', standort: 'Frankfurt', web: "https://www.dreso.com/" , zertifizierung: true, energietechnik: true, lca: true, ansprechperson: 'Natascha Altensen', email: 'natascha.altensen@dreso.com'},
  { id: 102, unternehmen: 'sustainable strategies', land: 'D', plz: '70176', standort: 'Stuttgart', web: "https://www.sustainable-strategies.eu/" , zertifizierung: true, energietechnik: true, lca: true, ansprechperson: 'Volker Auch-Schwelk', email: 'v.auch-schwelk@sustainable-strategies.eu'},
  { id: 103, unternehmen: 'iC consulenten Ziviltechniker GesmbH', land: 'A', plz: '1120', standort: 'Wien', web: "https://ic-group.org/" , zertifizierung: true, energietechnik: true, lca: true, tga: true, umwelttechnik: true, ansprechperson: 'Markus Auinger', email: 'm.auinger@ic-group.org'},
  { id: 104, unternehmen: 'iproplan Planungsgesellschaft mbH', land: 'D', plz: '09126', standort: 'Chemnitz', web: "https://www.iproplan.de/" , zertifizierung: true, energietechnik: true, lca: true, tga: true, umwelttechnik: true, schallschutz: true, akustik: true, bauphysik: true, ansprechperson: 'Dr. Saad Baradiy', email: 'dr.baradiy.saad@iproplan.de'},
  { id: 105, unternehmen: 'Drees & Sommer SE', land: 'D', plz: '40476', standort: 'Düsseldorf', web: "https://www.dreso.com" , zertifizierung: true, energietechnik: true, lca: true, tga: false, umwelttechnik: false, ansprechperson: 'Daniel Bittner', email: 'daniel.bittner@dreso.com'},
  { id: 106, unternehmen: 'IB Hausladen', land: 'D', plz: '85551', standort: 'Kirchheim', web: "https://www.ibhausladen.de/" , zertifizierung: true, energietechnik: true, lca: true, tga: true, umwelttechnik: true, schallschutz: true, akustik: true, bauphysik: true, simulation: true, ansprechperson: 'Heiko Wöhrle', email: 'heiko.woehrle@ibhausladen.de'},
  { id: 107, unternehmen: 'Transsolar', land: 'D', plz: '70563', standort: 'Stuttgart', web: "https://transsolar.com/de" , energietechnik: true, tga: true, bauphysik: true, simulation: true, monitoring: true, clima: true, ansprechperson: '-', email: '-'},
  { id: 108, unternehmen: 'LangHuggerRamp', land: 'D', plz: '80807', standort: 'München', web: "https://www.langhuggerrampp.de/" , zertifizierung: true, energietechnik: true, lca: true, lcc: true, ansprechperson: '-', email: '-'},
  { id: 109, unternehmen: 'Buro Happold', land: 'UK', plz: 'BA23DQ', standort: 'Bath', web: "https://www.burohappold.com/" , zertifizierung: true, energietechnik: true, clima: true, fassade: true, tga: true, ansprechperson: '-', email: '-'},
  { id: 110, unternehmen: 'bauart', land: 'D', plz: '36341', standort: 'Lauterbach', web: "https://www.bauart-ingenieure.de/" , zertifizierung: true, energietechnik: true, lca: true, lcc: true, sanierung: true, schallschutz: true, tga: true, bauphysik: true, ansprechperson: '-', email: '-'},
  { id: 111, unternehmen: 'Nagler Architekten', land: 'D', plz: '81245', standort: 'München', web: "https://www.nagler-architekten.de/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: false, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: true, fassade: false, ansprechperson: '-', email: '-'},
  { id: 112, unternehmen: 'Obermayer Gruppe', land: 'D', plz: '80686', standort: 'München', web: "https://www.obermeyer-group.com/" , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: true, umwelttechnik: false, bauphysik: true, schallschutz: false, akustik: false, tga: true, sanierung: false, fassade: true, ansprechperson: '-', email: '-'},
  { id: 113, unternehmen: 'ennac GmbH', land: 'D', plz: '52062', standort: 'Aachen', web: "https://www.ennac.de/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: false, akustik: false, tga: false, sanierung: true, fassade: false, ansprechperson: 'Thorsten Bleyer', email: 'info@ennac.de'},
  { id: 114, unternehmen: 'Werner Sobek', land: 'D', plz: '70597', standort: 'Stuttgart', web: "https://www.wernersobek.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: true, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: true, sanierung: false, fassade: true, brandschutz: true, ansprechperson: '-', email: '-'},
  { id: 115, unternehmen: 'dieBauingenieure', land: 'D', plz: '76185', standort: 'Karlsruhe', web: "https://www.diebauingenieure.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: false, tga: true, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Gunnar Clemenz', email: 'g.clemenz@dieBauingenieure.com'},
  { id: 116, unternehmen: 'Drees & Sommer SE', land: 'D', plz: '81379', standort: 'München', web: "https://www.dreso.com/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Mark Daub', email: 'mark.daub@dreso.com'},
  { id: 117, unternehmen: 'Low-E Ingenieurgesellschaft', land: 'D', plz: '38302', standort: 'Wolfenbüttel', web: "https://www.low-e-ingenieure.de/" , zertifizierung: true, lca: false, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: false, tga: false, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Philipp Eickmeyer', email: 'eickmeyer@low-e-ingenieure.de'},
  { id: 118, unternehmen: 'Drees & Sommer SE', land: 'D', plz: '10717', standort: 'Berlin', web: "https://www.dreso.com/ " , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Tobias Fischer', email: 'tobias.fischer@dreso.com '},
  { id: 119, unternehmen: 'E3-Consult', land: 'L', plz: '6680', standort: 'Mertert', web: "https://www.e3consult.lu// " , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Stefan Fries', email: 'stefan.fries@e3consult.lu'},
  { id: 120, unternehmen: 'Drees & Sommer SE', land: 'D', plz: '70569', standort: 'Stuttgart', web: "https://www.dreso.com/ " , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Philipp Groß', email: 'philipp.gross@dreso.com '},
  { id: 121, unternehmen: 'ikl Ingenieurbüro', land: 'D', plz: '76133', standort: 'Karlsruhe', web: "https://www.ikl-gmbh.de/ " , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Andreas Hintz', email: 'andreas.hintz@ikl-gmbh.de '},
  { id: 122, unternehmen: 'Müller-BBM', land: 'D', plz: '82152', standort: 'München', web: "https://www.muellerbbm.de/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: true, schallschutz: true, akustik: true, tga: true, sanierung: true, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
  { id: 123, unternehmen: 'HOINKA GmbH', land: 'D', plz: '71067', standort: 'Sindelfingen', web: "https://hoinka.com/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Thomas Hoinka', email: 'thomas.hoinka@hoinka.com'},
  { id: 124, unternehmen: 'Alpha IC GmbH', land: 'D', plz: '80336', standort: 'München', web: "https://www.alpha-ic.com/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Daniel Kozik', email: 'd.kozik@alpha-ic.com'},
  { id: 125, unternehmen: 'BAUES WUNDER', land: 'D', plz: '51427', standort: 'B. Gladbach', web: "https://baueswunder.com/" , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Prof. Michaela Lambertz', email: 'lambertz@baueswunder.com'},
  { id: 126, unternehmen: 'EGS-plan', land: 'D', plz: '70563', standort: 'Stuttgart', web: "https://egs-plan.de/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: true, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: false, akustik: false, tga: true, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Boris Mahler', email: 'boris.mahler@egs-plan.de'},
  { id: 127, unternehmen: 'MNP-Ingenieure', land: 'D', plz: '23562', standort: 'Lübeck', web: "https://www.mnp-ing.de/" , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Hendrik Müller', email: 'mueller@mnp-ing.de'},
  { id: 128, unternehmen: 'Henn GmbH', land: 'D', plz: '80333', standort: 'München', web: "https://www.henn.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: true, brandschutz: false, ansprechperson: 'Matthias Palloch', email: 'matthias.palloch@henn.com'},
  { id: 129, unternehmen: 'atmosgrad°GmbH', land: 'D', plz: '20095', standort: 'Hamburg', web: "https://atmosgrad.com/ " , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Frauke Pittwohn', email: 'frauke.pittwohn@atmosgrad.com'},
  { id: 130, unternehmen: 'P/O Consulting GmbH', land: 'D', plz: '81249', standort: 'München', web: "https://www.po-consulting.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: true, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Ingrid Pohl', email: 'ingrid.pohl@po-consulting.com'},
  { id: 131, unternehmen: 'Büro Dr. Rudloff', land: 'D', plz: '21614', standort: 'Buxtehude', web: "https://www.ib-rudloff.de/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Dr. Raoul Rudloff', email: 'rudloff@ib-rudloff.de'},
  { id: 132, unternehmen: 'Kurz und Fischer GmbH', land: 'D', plz: '71364', standort: 'Winnenden', web: "https://kurz-fischer.de/" , zertifizierung: false, lca: false, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: false, tga: true, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Zsóka Takács', email: 'zsoka.takacs@kurz-fischer.de'},
  { id: 133, unternehmen: 'CSD INGENIEURE GmbH', land: 'D', plz: '10997', standort: 'Berlin', web: "https://csdingenieure.de/" ,  zertifizierung: true, lca: true, lcc: true, simulation: true, monitoring: false, energietechnik: true, clima: true, umwelttechnik: true, bauphysik: true, schallschutz: true, akustik: true, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Sven Wünschmann', email: 's.wuenschmann@csdingenieure.de'},
  { id: 134, unternehmen: 'Blue Monkey Engineering', land: 'D', plz: '10435', standort: 'Berlin', web: "https://www.bluemonkeyengineering.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: false, akustik: false, tga: false, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Victoria Sohnrey', email: 'Victoria Sohnrey'},
  { id: 135, unternehmen: 'Denkgebäude', land: 'CH', plz: '8400', standort: 'Winterthur', web: "https://www.denkgebaeude.ch/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: true, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dieter Breer', email: 'dieter.breer@denkgebaeude.ch'},
  { id: 136, unternehmen: 'Thomas Rühle', land: 'D', plz: '59073', standort: 'Hamm', web: "https://oekozentrum.nrw/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: true, tga: true, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Thomas Rühle', email: 'ruehle@oekozentrum.nrw'},
  { id: 137, unternehmen: 'atp sustain', land: 'D', plz: '80335', standort: 'München', web: "https://www.atp-sustain.ag/" , zertifizierung: true, lca: true, lcc: true, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: true, tga: true, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Florian Kurz', email: 'florian.kurz@atp-sustain.ag'},
  { id: 138, unternehmen: 'M.O.O.CON GmbH', land: 'D', plz: '60487', standort: 'Frankfurt', web: "https://www.tum.de/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Martin Käfer', email: 'm.kaefer@moo-con.com'},
  { id: 139, unternehmen: 'RM-Engineering GmbH', land: 'A', plz: '8010', standort: 'Graz', web: "https://rm-e.at/" , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Reinhard Labugger', email: 'reinhard.labugger@rm-e.at'},
  { id: 140, unternehmen: 'Daxner & Merl GmbH', land: 'A', plz: '1070', standort: 'Wien', web: "www.daxner-merl.com" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Adolf Merl', email: 'adolf.merl@daxner-merl.com'},
  { id: 141, unternehmen: 'Norbert Rabl ZT GmbH', land: 'A', plz: '8010', standort: 'Graz', web: "https://www.rabl-zt.at/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: true, ansprechperson: 'Norbert Rabl', email: 'office@rabl-zt.at'},
  { id: 142, unternehmen: 'Rainer Strauch', land: 'A', plz: '6900', standort: 'Bregenz', web: "https://www.creebuildings.com/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Rainer Strauch', email: 'rainer.strauch@creebyrhomberg.com'},
  { id: 143, unternehmen: 'ee concept GmbH', land: 'D', plz: '10999', standort: 'Berlin', web: "https://www.ee-concept.de/" , zertifizierung: true, lca: true, lcc: true, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: true, schallschutz: true, akustik: true, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Andrea Georgi-Tomas', email: 'georgi-tomas@ee-concept.de'},
  { id: 144, unternehmen: 'ALTO Ingénierie', land: 'D', plz: '69002', standort: 'Lyon', web: "https://www.alto-ingenierie.fr/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: true, sanierung: false, fassade: false, brandschutz: true, ansprechperson: 'Elodie Dumas', email: 'elodie.dumas@alto-ingenierie.fr'},
  { id: 145, unternehmen: 'ZERO CONSULTING', land: 'SP', plz: '08015', standort: 'Barcelona', web: "https://www.zeroconsulting.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: true, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Artuto Garcia Cifre', email: 'artur@zeroconsulting.com'},
  { id: 146, unternehmen: 'ENERGO', land: 'IT', plz: '20139', standort: 'Milano', web: "https://www.energogroup.com/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Marija Golubovic', email: 'golubovic@energogroup.com'},
  { id: 147, unternehmen: 'Arcadis Dtld. GmbH', land: 'D', plz: '64293', standort: 'Darmstadt', web: "https://www.arcadis.de/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: true, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Christine Hackenbracht', email: 'christine.hackenbracht@arcadis.com'},
  { id: 148, unternehmen: 'Hoffmann Consulting', land: 'D', plz: '50226', standort: 'Frechen', web: "https://www.gerhard-hoffmann.de/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Gerhard Hoffmann', email: 'ghhoffma@outlook.de'},
  { id: 149, unternehmen: 'Alpha IC GmbH', land: 'D', plz: '50829', standort: 'Köln', web: "https://www.alpha-ic.com/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: false, energietechnik: true, clima: true, umwelttechnik: true, bauphysik: true, schallschutz: true, akustik: true, tga: true, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Daniela Merkenich', email: 'd.merkenich@alpha-ic.com'},
  { id: 150, unternehmen: 'Ingenieurbüro Trinius GmbH', land: 'D', plz: '22303', standort: 'Hamburg', web: "https://www.trinius.de/" , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Dr. Wolfram Trinius', email: 'trinius@trinius.de'},
  { id: 151, unternehmen: 'Ecopenta', land: 'SP', plz: '08006', standort: 'Barcelona', web: "https://www.ecopenta.com/" , zertifizierung: true, lca: true, lcc: false, simulation: false, monitoring: true, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Daniel Vilavedra', email: 'daniel.vilavedra@ecopenta.com'},
  { id: 152, unternehmen: 'gmp Architekten', land: 'D', plz: '22765', standort: 'Hamburg', web: "https://www.gmp.de/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: true, fassade: false, brandschutz: false, ansprechperson: 'Urs Wedekind', email: 'uwedekind@gmp.de'},
  //{ id: 999, unternehmen: '99999', land: 'D', plz: '99999', standort: 'Stadt', web: "https://www.tum.de/" , zertifizierung: false, lca: false, lcc: false, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: true, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
];

const rowsAusführung = [
  { id: 201, unternehmen: 'A', land: 'D', plz: '33649', standort: 'Bielefeld', web: "https://www.list-gruppe.de/gruppe/holding/", sanierung: true, ansprechperson: '-', email: 'info@list-bib.de'},
];

const rowsSoftwareentwicklung = [
  { id: 301, unternehmen: 'EPEA (DreSo)', land: 'D', plz: '70569', standort: 'Stuttgart', web: "https://epea.com/ " , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: false, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: 'Christian Luft', email: 'christian.luft@dreso.com'},
  { id: 302, unternehmen: 'Concular GmbH', land: 'D', plz: '70327', standort: 'Stuttgart', web: "https://concular.de/ " , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
  { id: 303, unternehmen: 'Madaster', land: 'D', plz: '10717', standort: 'Berlin', web: "https://madaster.de/ " , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: false, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
  { id: 304, unternehmen: 'CAALA', land: 'D', plz: '81543', standort: 'München', web: "https://www.caala.de/ " , zertifizierung: true, lca: true, lcc: true, simulation: false, monitoring: false, energietechnik: true, clima: false, umwelttechnik: false, bauphysik: false, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
  { id: 305, unternehmen: 'v3sta', land: 'D', plz: '99999', standort: 'Stadt', web: "https://www.tum.de/" , zertifizierung: true, lca: true, lcc: false, simulation: true, monitoring: true, energietechnik: true, clima: true, umwelttechnik: true, bauphysik: true, schallschutz: false, akustik: false, tga: false, sanierung: false, fassade: false, brandschutz: false, ansprechperson: '-', email: '-'},
];

const rowsForschung = [
  { id: 401, unternehmen: 'C', land: 'D', plz: '60326', standort: 'Frankfurt', web: "https://www.dreso.com" , zertifizierung: true, energietechnik: true, lca: true, ansprechperson: 'Natascha Altensen', email: 'natascha.altensen@dreso.com'},

];

const allArrays = [...rowsPlanung, ...rowsAusführung, ...rowsSoftwareentwicklung, ...rowsForschung];

export default function EventTable() {
    const [pick, setPick] = React.useState('50');
    const [rows, setRows] = React.useState(allArrays);
    const handleChange = (event) => {
      setPick(event.target.value);
      if (event.target.value === 10) {
        setRows(rowsPlanung);
      }
      else if (event.target.value === 20) {
        setRows(rowsAusführung);
      }
      else if (event.target.value === 30) {
        setRows(rowsSoftwareentwicklung);
      }
      else if (event.target.value === 40) {
        setRows(rowsForschung);
      }
      else {
        setRows(allArrays);
      }
    }
  return (
    <div style={{ height: "90vh", width: '100%', fontSize: "22px",  margin: "300", fontFamily: 'TTNormsPro', fontWeight: "bold"}}>
      &nbsp;Energie- und Nachhaltigkeitsberatungsunternehmen <br></br>     
      <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Auswahl</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pick}
          onChange={handleChange}
          label="Picker"
      >
          <MenuItem value={50}>Alle</MenuItem>
          <MenuItem value={10}>Planung</MenuItem>
          <MenuItem value={20}>Ausführung</MenuItem>
          <MenuItem value={30}>Softwareentwicklung</MenuItem>
          <MenuItem value={40}>Forschung</MenuItem>
        </Select>
      </FormControl>
    </div>
      <DataGrid 
      rows={rows} 
      columns={columns} 
      autoPageSize
      density='compact' // 	'comfortable' | 'compact' | 'standard'
      //pageSize={18}
      //rowsPerPageOptions={[18]}
      components={{Toolbar: GridToolbar,}}
      />
    </div>
  );
}

