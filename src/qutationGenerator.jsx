import React, { useState } from "react";
import { Download, Plus, Trash2, Building, FileText } from "lucide-react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
  pdf,
} from "@react-pdf/renderer";
import QuotationPDF from "./qutationPDF";

const QuotationGenerator = () => {
  const [quotationData, setQuotationData] = useState({
    // Static header data
    customer: "",
    contact: "",
    location: "",
    customerId: "",
    vatNo: "",
    payment: "",
    salesRep: "",
    referenceNo: "",
    quotationDate: new Date().toISOString().split("T")[0],

    // Dynamic items
    items: [
      {
        itemCode: "",
        description: "",
        arabicDescription: "",
        unit: "",
        unitPrice: 0,
        qty: 0,
      },
    ],
  });

  const addItem = () => {
    setQuotationData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          itemCode: "",
          description: "",
          arabicDescription: "",
          unit: "EA",
          unitPrice: 0,
          qty: 1,
        },
      ],
    }));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...quotationData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setQuotationData((prev) => ({ ...prev, items: newItems }));
  };

  const removeItem = (index) => {
    if (quotationData.items.length > 1) {
      setQuotationData((prev) => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index),
      }));
    }
  };

  const calculateItemTotal = (item) => {
    return item.unitPrice * item.qty * 1.15;
  };

  const calculateTotals = () => {
    const subtotal = quotationData.items.reduce(
      (total, item) => total + item.unitPrice * item.qty,
      0
    );
    const vat = subtotal * 0.15;
    const total = subtotal + vat;

    return { subtotal, vat, total };
  };

  const generateQuotationNumber = () => {
    return String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  };

  // PDF Document Component

  const handleDownload = async () => {
    // Generate PDF as Blob
    const blob = await pdf(
      <QuotationPDF
        data={quotationData}
        quotationNo={quotationNo}
        calculateTotals={calculateTotals}
      />
    ).toBlob();

    // Create temporary URL and trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "react-pdf-example.pdf";
    link.click();
    URL.revokeObjectURL(url);
  };

  const quotationNo = generateQuotationNumber();
  // const fileName = `Quotation-${quotationNo}-${quotationData.customer.replace(
  //   /[^a-zA-Z0-9]/g,
  //   "_"
  // )}.pdf`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <FileText className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Quotation Generator
            </h1>
            <p className="text-gray-600">
              Create professional quotations with dynamic itemized content
            </p>
          </div>

          {/* Header Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Building className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Quotation Details
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Customer Name"
                  value={quotationData.customer}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      customer: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Contact"
                  value={quotationData.contact}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      contact: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Location"
                  value={quotationData.location}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Customer ID"
                  value={quotationData.customerId}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      customerId: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="VAT Number"
                  value={quotationData.vatNo}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      vatNo: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                <input
                  style={{ color: "black" }}
                  type="date"
                  value={quotationData.quotationDate}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      quotationDate: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <select
                  value={quotationData.payment}
                  style={{ color: "black" }}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      payment: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="Cash" style={{ color: "black" }}>
                    Cash
                  </option>
                  <option value="Credit" style={{ color: "black" }}>
                    Credit
                  </option>
                  <option value="Bank Transfer" style={{ color: "black" }}>
                    Bank Transfer
                  </option>
                </select>

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Sales Representative"
                  value={quotationData.salesRep}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      salesRep: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Reference Number"
                  value={quotationData.referenceNo}
                  onChange={(e) =>
                    setQuotationData((prev) => ({
                      ...prev,
                      referenceNo: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Items</h2>
              <button
                onClick={addItem}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 text-sm font-medium flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-4">
              {quotationData.items.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-12 gap-3 items-start">
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Item Code
                      </label>
                      <input
                        style={{ color: "black" }}
                        type="text"
                        placeholder="Code"
                        value={item.itemCode}
                        onChange={(e) =>
                          updateItem(index, "itemCode", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-4">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <input
                        style={{ color: "black" }}
                        type="text"
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) =>
                          updateItem(index, "description", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-2"
                      />
                      <input
                        style={{ color: "black" }}
                        type="text"
                        placeholder="Arabic description (optional)"
                        value={item.arabicDescription}
                        onChange={(e) =>
                          updateItem(index, "arabicDescription", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Unit
                      </label>
                      <select
                        style={{ color: "black" }}
                        value={item.unit}
                        onChange={(e) =>
                          updateItem(index, "unit", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="EA" style={{ color: "black" }}>
                          EA
                        </option>
                        <option value="KG" style={{ color: "black" }}>
                          KG
                        </option>
                        <option value="M" style={{ color: "black" }}>
                          M
                        </option>
                        <option value="L" style={{ color: "black" }}>
                          L
                        </option>
                        <option value="PC" style={{ color: "black" }}>
                          PC
                        </option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Unit Price
                      </label>
                      <input
                        style={{ color: "black" }}
                        type="number"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        value={item.unitPrice}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "unitPrice",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Qty
                      </label>
                      <input
                        style={{ color: "black" }}
                        type="number"
                        placeholder="1"
                        min="0.01"
                        step="0.01"
                        value={item.qty}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "qty",
                            parseFloat(e.target.value) || 1
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Total
                      </label>
                      <div className="px-3 py-2 bg-gray-100 rounded text-sm font-semibold text-gray-700 text-right">
                        {calculateItemTotal(item).toFixed(2)}
                      </div>
                    </div>

                    <div className="col-span-1 flex items-end">
                      <button
                        onClick={() => removeItem(index)}
                        className="w-full p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition duration-200"
                        disabled={quotationData.items.length === 1}
                      >
                        <Trash2 className="h-4 w-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals Display */}
            <div className="mt-6 bg-indigo-50 p-6 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-right">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Subtotal (Excl. VAT)
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {calculateTotals().subtotal.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">VAT (15%)</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {calculateTotals().vat.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-600">
                    Total Amount Due
                  </p>
                  <p className="text-xl font-bold text-indigo-800">
                    {calculateTotals().total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center flex items-center justify-center text-center">
            <button
              className="flex items-center space-x-2"
              onClick={() => handleDownload(quotationData)}
            >
              <Download className="h-5 w-5" />
              <span>Download Quotation PDF</span>
            </button>
          </div>
          {(!quotationData.customer ||
            quotationData.items.some((item) => !item.description)) && (
            <p className="text-red-500 text-sm mt-2">
              Please fill in empty customer deails and all item descriptions
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotationGenerator;
