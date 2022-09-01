import React from "react";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { customStyles } from "../constants/customStyles";
import Select from "react-select";

const ThemeDropdown: React.FC<{ handleThemeChange: any, theme: any }> = ({ handleThemeChange, theme }) => {
	return (
		<Select
			placeholder={`Select Theme`}
			// options={languageOptions}
			options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
				label: themeName,
				value: themeId,
				key: themeId,
			}))}
			value={theme}
			styles={customStyles}
			onChange={handleThemeChange}
		/>
	);
};

export default ThemeDropdown;