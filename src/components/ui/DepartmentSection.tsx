import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Department } from "../types/types";

const array: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentSection = () => {
  const [openDepartments, setOpenDepartments] = useState<
    Record<string, boolean>
  >({});
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleToggle = (department: string) => {
    setOpenDepartments((prevState) => ({
      ...prevState,
      [department]: !prevState[department],
    }));
  };

  const handleCheckboxChange = (
    item: string,
    isDepartment: boolean,
    subDepartments: string[] = []
  ) => {
    if (isDepartment) {
      const newCheckedItems = { ...checkedItems };
      const allChecked = subDepartments.every((sub) => newCheckedItems[sub]);

      subDepartments.forEach((sub) => {
        newCheckedItems[sub] = !allChecked;
      });
      newCheckedItems[item] = !allChecked;
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems((prevState) => ({
        ...prevState,
        [item]: !prevState[item],
      }));
    }
  };

  const isDepartmentChecked = (subDepartments: string[]) => {
    return subDepartments.every((sub) => checkedItems[sub]);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Department Section
        </h1>
      </div>
      <Box>
        <List>
          {array.map((element, index) => (
            <Box key={index}>
              <ListItem divider>
                <ListItemButton>
                  {openDepartments[element.department] ? (
                    <RemoveIcon
                      onClick={() => handleToggle(element.department)}
                    />
                  ) : (
                    <AddIcon onClick={() => handleToggle(element.department)} />
                  )}
                  <Checkbox
                    checked={isDepartmentChecked(element.sub_departments)}
                    onChange={() =>
                      handleCheckboxChange(
                        element.department,
                        true,
                        element.sub_departments
                      )
                    }
                  />

                  <h2 className="text-lg font-semibold uppercase">
                    {element.department}
                  </h2>
                </ListItemButton>
              </ListItem>
              <Collapse in={!!openDepartments[element.department]}>
                <List sx={{ width: 300 }}>
                  {element.sub_departments.map((sub_department, subIndex) => (
                    <ListItem className="ml-7" key={subIndex}>
                      <ListItemButton>
                        <Checkbox
                          checked={!!checkedItems[sub_department]}
                          onChange={() =>
                            handleCheckboxChange(sub_department, false)
                          }
                        />

                        <p className="text-base font-medium">
                          {sub_department}
                        </p>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Box>
    </>
  );
};

export default DepartmentSection;
