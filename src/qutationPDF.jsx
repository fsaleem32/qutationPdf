import { StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Cairo",
  src: "/public/Fonts/Cairo/static/Cairo-Regular.ttf", // ✅ public path, works on Netlify
});

// Enhanced PDF Styles with Creative Design
const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    backgroundColor: "#ffffff",
  },

  // Header Section
  headerSection: {
    backgroundColor: "#1e3a8a",
    padding: 25,
    marginBottom: 30,
    position: "relative",
  },
  headerDecoration: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "200px",
    height: "100px",
    backgroundColor: "#3b82f6",
    opacity: 0.2,
    borderBottomLeftRadius: "50px",
  },
  companyNameArabic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Cairo",
    direction: "rtl",
  },
  companyNameEnglish: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e5e7eb",
    textAlign: "center",
    marginBottom: 15,
  },
  headerAddress: {
    fontSize: 9,
    color: "#d1d5db",
    textAlign: "center",
    lineHeight: 1.4,
  },

  // Quotation Title
  quotationTitle: {
    backgroundColor: "#f59e0b", // Amber
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 25,
    textAlign: "center",
    borderRadius: 8,
    position: "relative",
  },
  quotationTitleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 2,
  },
  quotationSubtitle: {
    fontSize: 12,
    color: "#fef3c7",
    marginTop: 5,
  },

  // Content Container
  contentContainer: {
    paddingHorizontal: 20,
  },

  // Info Section with Cards
  infoSection: {
    marginBottom: 25,
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  infoCard: {
    width: "48%",
    backgroundColor: "#f8fafc",
    border: "2px solid #e2e8f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  infoCardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: "2px solid #3b82f6",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "center",
  },
  infoLabel: {
    width: "40%",
    fontSize: 9,
    fontWeight: "bold",
    color: "#374151",
  },
  infoValue: {
    width: "60%",
    fontSize: 9,
    color: "#111827",
    backgroundColor: "#ffffff",
    padding: 4,
    borderRadius: 4,
    border: "1px solid #d1d5db",
  },

  // Table Section
  tableSection: {
    marginBottom: 30,
  },
  tableTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 10,
    paddingLeft: 5,
  },
  table: {
    display: "table",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    border: "2px solid #1e40af",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableHeader: {
    backgroundColor: "#1e40af",
  },
  tableColHeader: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#1e40af",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 6,
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 9,
    backgroundColor: "#ffffff",
  },
  tableColAlt: {
    backgroundColor: "#f8fafc",
  },

  // Column widths
  srCol: { width: "6%" },
  codeCol: { width: "10%" },
  descCol: { width: "42%" },
  unitCol: { width: "8%" },
  priceCol: { width: "12%" },
  qtyCol: { width: "8%" },
  totalCol: { width: "14%" },

  arabicText: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 3,
    fontStyle: "italic",
  },

  // Totals Section
  totalsSection: {
    marginTop: 30,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  totalsCard: {
    width: "45%",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    overflow: "hidden",
    border: "2px solid #1e40af",
  },
  totalsHeader: {
    backgroundColor: "#1e40af",
    padding: 10,
    textAlign: "center",
  },
  totalsHeaderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
  totalsRow: {
    flexDirection: "row",
    borderBottom: "1px solid #e5e7eb",
  },
  totalsRowFinal: {
    backgroundColor: "#fef3c7",
  },
  totalsLabel: {
    width: "65%",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: "#374151",
    borderRight: "1px solid #e5e7eb",
  },
  totalsAmount: {
    width: "35%",
    padding: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "right",
  },
  totalsAmountFinal: {
    color: "#d97706",
    fontSize: 11,
  },

  // Footer Section
  footerSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1e3a8a",
    padding: 20,
  },
  bankCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    border: "2px solid #3b82f6",
  },
  bankTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 8,
    textAlign: "center",
  },
  bankInfo: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 3,
    lineHeight: 1.3,
  },
  poweredBy: {
    textAlign: "center",
    fontSize: 8,
    color: "#d1d5db",
    fontStyle: "italic",
  },

  // Utility classes
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  leftText: {
    textAlign: "left",
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
        {/* Creative Header */}
        <View style={styles.headerSection}>
          <View style={styles.headerDecoration} />
          <Text style={styles.companyNameArabic}>شركة الحمد التجارية</Text>
          <Text style={styles.companyNameEnglish}>AL HAMD TRADING COMPANY</Text>
          <Text style={styles.headerAddress}>
            Building # 6289 Faisaliah Ali bin Abi Talib St{"\n"}
            Riyadh 12729. KSA
          </Text>
        </View>

        {/* Quotation Title */}
        <View style={styles.quotationTitle}>
          <Text style={styles.quotationTitleText}>QUOTATION</Text>
          <Text style={styles.quotationSubtitle}>
            Professional Business Quote
          </Text>
        </View>

        <View style={styles.contentContainer}>
          {/* Info Cards Section */}
          <View style={styles.infoSection}>
            <View style={styles.infoGrid}>
              {/* Customer Information Card */}
              <View style={styles.infoCard}>
                <Text style={styles.infoCardTitle}>Customer Information</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Customer:</Text>
                  <Text style={styles.infoValue}>{data.customer}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Contact:</Text>
                  <Text style={styles.infoValue}>{data.contact}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Location:</Text>
                  <Text style={styles.infoValue}>{data.location}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Customer ID:</Text>
                  <Text style={styles.infoValue}>{data.customerId}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>VAT NO:</Text>
                  <Text style={styles.infoValue}>{data.vatNo}</Text>
                </View>
              </View>

              {/* Quotation Details Card */}
              <View style={styles.infoCard}>
                <Text style={styles.infoCardTitle}>Quotation Details</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Quote No:</Text>
                  <Text style={styles.infoValue}>{quotationNo}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Date:</Text>
                  <Text style={styles.infoValue}>
                    {new Date(data.quotationDate).toLocaleDateString("en-GB")}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Payment:</Text>
                  <Text style={styles.infoValue}>{data.payment}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Sales Rep:</Text>
                  <Text style={styles.infoValue}>{data.salesRep}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Reference:</Text>
                  <Text style={styles.infoValue}>{data.referenceNo}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Items Table */}
          <View style={styles.tableSection}>
            <Text style={styles.tableTitle}>Items & Services</Text>
            <View style={styles.table}>
              {/* Table Header */}
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableColHeader, styles.srCol]}>Sr.</Text>
                <Text style={[styles.tableColHeader, styles.codeCol]}>
                  Code
                </Text>
                <Text style={[styles.tableColHeader, styles.descCol]}>
                  Description
                </Text>
                <Text style={[styles.tableColHeader, styles.unitCol]}>
                  Unit
                </Text>
                <Text style={[styles.tableColHeader, styles.priceCol]}>
                  Unit Price
                </Text>
                <Text style={[styles.tableColHeader, styles.qtyCol]}>Qty</Text>
                <Text style={[styles.tableColHeader, styles.totalCol]}>
                  Total
                </Text>
              </View>

              {/* Table Rows */}
              {data.items.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.srCol,
                      styles.centerText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {index + 1}
                  </Text>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.codeCol,
                      styles.centerText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {item.itemCode}
                  </Text>
                  <View
                    style={[
                      styles.tableCol,
                      styles.descCol,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    <Text>{item.description}</Text>
                    {item.arabicDescription && (
                      <Text style={styles.arabicText}>
                        {item.arabicDescription}
                      </Text>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.unitCol,
                      styles.centerText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {item.unit}
                  </Text>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.priceCol,
                      styles.rightText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {item.unitPrice.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.qtyCol,
                      styles.centerText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {item.qty.toFixed(2)}
                  </Text>
                  <Text
                    style={[
                      styles.tableCol,
                      styles.totalCol,
                      styles.rightText,
                      index % 2 === 1 && styles.tableColAlt,
                    ]}
                  >
                    {calculateItemTotal(item).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Totals Card */}
          <View style={styles.totalsSection}>
            <View style={styles.totalsCard}>
              <View style={styles.totalsHeader}>
                <Text style={styles.totalsHeaderText}>Summary</Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsLabel}>Subtotal (Excluding VAT)</Text>
                <Text style={styles.totalsAmount}>
                  {subtotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsLabel}>VAT (15%)</Text>
                <Text style={styles.totalsAmount}>
                  {vat.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </Text>
              </View>
              <View style={[styles.totalsRow, styles.totalsRowFinal]}>
                <Text style={styles.totalsLabel}>Total Amount</Text>
                <Text style={[styles.totalsAmount, styles.totalsAmountFinal]}>
                  {total.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
                  SAR
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Enhanced Footer */}
        <View style={styles.footerSection}>
          <View style={styles.bankCard}>
            <Text style={styles.bankTitle}>Banking Information</Text>
            <Text style={styles.bankInfo}>
              Bank Name: THE SAUDI NATIONAL BANK
            </Text>
            <Text style={styles.bankInfo}>
              Account Title: SECOND ADVANCE FACTORY FOR INDUSTRIES
            </Text>
            <Text style={styles.bankInfo}>Account No: 01400019844906</Text>
            <Text style={styles.bankInfo}>
              IBAN No: SA0710000001400019844906
            </Text>
          </View>
          <Text style={styles.poweredBy}>
            Generated with precision • Powered by Advanced PDF Solutions
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;
