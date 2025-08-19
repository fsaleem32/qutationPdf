import { StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    // fontFamily: "Arial",
    fontSize: 10,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  infoGrid: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  infoLabel: {
    width: "15%",
    fontWeight: "bold",
    paddingRight: 5,
  },
  infoValue: {
    width: "35%",
    borderBottom: "1px solid #ddd",
    paddingBottom: 2,
    paddingLeft: 5,
    marginRight: 10,
  },
  table: {
    display: "table",
    width: "100%",
    marginVertical: 20,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    backgroundColor: "#f8f9fa",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 9,
    fontWeight: "bold",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 4,
    fontSize: 8,
  },
  srCol: { width: "5%" },
  codeCol: { width: "8%" },
  descCol: { width: "45%" },
  unitCol: { width: "8%" },
  priceCol: { width: "12%" },
  qtyCol: { width: "8%" },
  totalCol: { width: "14%" },
  arabicText: {
    fontSize: 7,
    color: "#666",
    marginTop: 2,
  },
  totalsSection: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  totalsTable: {
    width: "40%",
  },
  totalsRow: {
    flexDirection: "row",
  },
  totalsLabel: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#f8f9fa",
    padding: 5,
    fontSize: 9,
    fontWeight: "bold",
  },
  totalsAmount: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    padding: 5,
    fontSize: 9,
    textAlign: "right",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    fontSize: 8,
  },
  bankInfo: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#f8f9fa",
    padding: 10,
    marginBottom: 5,
  },
  poweredBy: {
    textAlign: "center",
    fontSize: 6,
    color: "#666",
  },
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
});
const QuotationPDF = ({ data, quotationNo, calculateTotals }) => {
  const { subtotal, vat, total } = calculateTotals();

  const calculateItemTotal = (item) => {
    return item.unitPrice * item.qty * 1.15;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.header}>Quotation</Text>

        {/* Info Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Customer :</Text>
            <Text style={styles.infoValue}>{data.customer}</Text>
            <Text style={styles.infoLabel}>Quotation No :</Text>
            <Text style={styles.infoValue}>{quotationNo}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Contact :</Text>
            <Text style={styles.infoValue}>{data.contact}</Text>
            <Text style={styles.infoLabel}>Quotation Date :</Text>
            <Text style={styles.infoValue}>
              {new Date(data.quotationDate).toLocaleDateString("en-GB")}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Location :</Text>
            <Text style={styles.infoValue}>{data.location}</Text>
            <Text style={styles.infoLabel}>Payment :</Text>
            <Text style={styles.infoValue}>{data.payment}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Customer ID :</Text>
            <Text style={styles.infoValue}>{data.customerId}</Text>
            <Text style={styles.infoLabel}>Sales Rep :</Text>
            <Text style={styles.infoValue}>{data.salesRep}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>VAT NO :</Text>
            <Text style={styles.infoValue}>{data.vatNo}</Text>
            <Text style={styles.infoLabel}>Reference No :</Text>
            <Text style={styles.infoValue}>{data.referenceNo}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableColHeader, styles.srCol]}>Sr.</Text>
            <Text style={[styles.tableColHeader, styles.codeCol]}>
              Item Code
            </Text>
            <Text style={[styles.tableColHeader, styles.descCol]}>
              Item Description
            </Text>
            <Text style={[styles.tableColHeader, styles.unitCol]}>Unit</Text>
            <Text style={[styles.tableColHeader, styles.priceCol]}>
              Unit Price
            </Text>
            <Text style={[styles.tableColHeader, styles.qtyCol]}>Qty</Text>
            <Text style={[styles.tableColHeader, styles.totalCol]}>Total</Text>
          </View>

          {/* Table Rows */}
          {data.items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCol, styles.srCol, styles.centerText]}>
                {index + 1}
              </Text>
              <Text
                style={[styles.tableCol, styles.codeCol, styles.centerText]}
              >
                {item.itemCode}
              </Text>
              <View style={[styles.tableCol, styles.descCol]}>
                <Text>{item.description}</Text>
                {item.arabicDescription && (
                  <Text style={styles.arabicText}>
                    {item.arabicDescription}
                  </Text>
                )}
              </View>
              <Text
                style={[styles.tableCol, styles.unitCol, styles.centerText]}
              >
                {item.unit}
              </Text>
              <Text
                style={[styles.tableCol, styles.priceCol, styles.rightText]}
              >
                {item.unitPrice.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </Text>
              <Text style={[styles.tableCol, styles.qtyCol, styles.centerText]}>
                {item.qty.toFixed(2)}
              </Text>
              <Text
                style={[styles.tableCol, styles.totalCol, styles.rightText]}
              >
                {calculateItemTotal(item).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsTable}>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>
                Total Taxable Amount (Excluding VAT)
              </Text>
              <Text style={styles.totalsAmount}>
                {subtotal.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </Text>
            </View>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Total VAT</Text>
              <Text style={styles.totalsAmount}>
                {vat.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </Text>
            </View>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Total Amount Due</Text>
              <Text style={styles.totalsAmount}>
                {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.bankInfo}>
            <Text>Bank Name : THE SAUDI NATIONAL BANK</Text>
            <Text>Account Title : SECOND ADVANCE FACTORY FOR INDUSTRIES</Text>
            <Text>Account No : 01400019844906</Text>
            <Text>IBAN No : SA0710000001400019844906</Text>
          </View>
          <Text style={styles.poweredBy}>Powered by TCPDF (www.tcpdf.org)</Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;
