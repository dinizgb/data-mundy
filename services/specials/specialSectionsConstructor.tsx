import specialSectionPicker from "./specialSectionPicker";

export default function specialSectionsConstructor(props: any) {
    const filteredSectionsArray = [];
    let possibleSections = [
        props.section_1,
        props.section_2,
        props.section_3,
        props.section_4,
        props.section_5,
        props.section_6,
        props.section_7,
        props.section_8,
        props.section_9
    ];
    
    possibleSections.map((item, index) => {
        if (item.activate_section == true) {
            filteredSectionsArray.push(specialSectionPicker(item, index))
        }
    })    
    
    return filteredSectionsArray;
}