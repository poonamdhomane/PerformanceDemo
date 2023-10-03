import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

function Parent({ item }) {
  const [checkboxStatus, setCheckboxStatus] = useState({});
  console.log("...inside parent", item);

  function renderVerticalLabel(title, subTitle) {
    console.log(".............inside renderVerticalLabel");

    return (
      <div style={{ flexDirection: "column" }}>
        <label style={{ textAlign: "center" }}>
          {title.includes("QTY") ? "" : "\u20B9"} {subTitle}
        </label>
        <label style={{ textAlign: "center" }}>{title}</label>
      </div>
    );
  }
  function renderBottom(data) {
    console.log(".............inside renderBottom");

    return (
      <div
        style={{
          flexDirection: "row",
          height: 40,
          justifyContent: "space-evenly",
          backgroundColor: "#dedede",
        }}
      >
        {renderVerticalLabel("QTY", data.Sale_Qty)}
        {renderVerticalLabel("SALE", data.Sale_Value)}
        {renderVerticalLabel("AMT", data.Sale_Amount)}
      </div>
    );
  }

  function renderRow(title, subTitle) {
    console.log(".............inside renderRow");

    return (
      <div style={styles.bookTitleContainer}>
        <label style={{ paddingRight: 10, width: 85 }}>{title}</label>
        <label style={{ flex: 1, color: "#474747" }}>
          {subTitle ? subTitle : "Not Available"}
        </label>
      </div>
    );
  }

  return (
    <div style={styles.bookItemContainer}>
      <div style={styles.contentRippleContainer}>
        <div />
        <div>
          {renderRow("Branch", item.data.Branch)}
          {renderRow("Supplier", item.data.Supplier)}
          {renderRow("Item", item.data.cat3)}
          {renderRow("Brand", item.data.cat4)}
          {renderRow("cat7", item.data.cat7)}
          {renderRow("billdate", item.data.billdate)}
        </div>
      </div>
      {renderBottom(item)}
    </div>
  );
}

export default memo(Parent);

const styles = {
  bookItemContainer: {
    flex: 1,
    overflow: "hidden",
    margin: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    borderColor: "black",
  },
  contentRippleContainer: {
    padding: 16,
  },
  bookIconContainer: {
    borderRadius: 80 / 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#f9f9f9",
  },
  bookTitleContainer: {
    flex: 1,
    flexDirection: "row",
  },
  bookTitleStyle: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 30,
    color: "white",
    labelColor: "blue",
    backgroundColor: "black",
  },
  bookCategoryStyle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#59c798",
    labelTransform: "capitalize",
  },
  priceContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  priceLabelStyle: {
    fontWeight: "600",
    fontSize: 16,
  },
  dottedMenuContainer: {
    position: "absolute",
    right: 0,
    top: 6,
  },
};
