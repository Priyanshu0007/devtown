import { useState, useRef, useEffect } from "react";
import {
  DropDownWrapper,
  DropDownButton,
  SVG,
  OptionMenu,
  OptionRow,
  Label
} from "./DropDown.styled";

// eslint-disable-next-line react/prop-types
function DropDown({ defaultText = "", options = [], changeOptionName }) {
  const [actionDropDown, setActionDropDown] = useState(false);
  const dropdownEl = useRef(null);
  const [mainDefaultText, setMainDefaultText] = useState(defaultText);

  const dropdown = () => {
    setActionDropDown(!actionDropDown);
  };

  const handleClickClose = (event) => {
    const path = event.composedPath();

    let isClickInside = path.find((element) => element === dropdownEl.current);

    if (isClickInside === undefined) {
      if (actionDropDown) {
        setActionDropDown(false);
      }
    }
  };
  useEffect(() => {
    setMainDefaultText(defaultText);
  }, [defaultText]);
  useEffect(() => {
    document.addEventListener("mouseup", handleClickClose);
    return () => {
      document.removeEventListener("mouseup", handleClickClose);
    };
  });

  return (
    <DropDownWrapper>
      <div ref={dropdownEl}>
        <DropDownButton onClick={dropdown}>
          {mainDefaultText}
          <SVG>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </SVG>
        </DropDownButton>

        <DropDownWrapper>
          {actionDropDown ? (
            <>
              <OptionMenu role="menu">
                {options.map((option, key) => (
                  <OptionRow key={key} onClick={()=>changeOptionName(option)}>
                    <Label>{`${option}`}</Label>
                  </OptionRow>
                ))}
              </OptionMenu>
            </>
          ) : null}
        </DropDownWrapper>
      </div>
    </DropDownWrapper>
  );
}

export default DropDown;
