import specialSectionPicker from "./specialSectionPicker";

/**
 * Function that returns the Sections for the Special Area.
 * @param {any} props with the data of the sections.
 * @return {TSX.Element}: The TSX code with the Special Area Sections.
 */
export default function specialSectionsConstructor(props: any) {
  const filteredSectionsArray = [];
  const possibleSections = [
    props.section_1,
    props.section_2,
    props.section_3,
    props.section_4,
    props.section_5,
    props.section_6,
    props.section_7,
    props.section_8,
    props.section_9,
  ];

  possibleSections.map((item, index) => {
    if (item.activate_section == true) {
      filteredSectionsArray.push(specialSectionPicker(item, index));
    }
  });

  return filteredSectionsArray;
}
