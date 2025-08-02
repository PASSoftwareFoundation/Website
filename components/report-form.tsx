"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus, Upload, Send, Minus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import * as v from "valibot"

// Platform schemas with metadata for dynamic form generation
const platformSchemas = {
  discord: {
    label: "Discord",
    schema: v.object({
      platform: v.literal("discord"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      serverInvites: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "Discord Usernames", type: "array", subtype: "text", placeholder: "username#1234" },
      {
        key: "serverInvites",
        label: "Server Invite Links",
        type: "array",
        subtype: "url",
        placeholder: "https://discord.gg/...",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
  roblox: {
    label: "Roblox",
    schema: v.object({
      platform: v.literal("roblox"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      userIds: v.optional(v.array(v.pipe(v.string(), v.regex(/^\d+$/, "User ID must be numeric"))), []),
      gameLinks: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "Roblox Usernames", type: "array", subtype: "text", placeholder: "Username" },
      { key: "userIds", label: "User IDs", type: "array", subtype: "text", placeholder: "123456789", optional: true },
      {
        key: "gameLinks",
        label: "Game Links",
        type: "array",
        subtype: "url",
        placeholder: "https://www.roblox.com/games/...",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
  minecraft: {
    label: "Minecraft",
    schema: v.object({
      platform: v.literal("minecraft"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      serverIps: v.optional(v.array(v.string()), []),
      uuids: v.optional(v.array(v.string()), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "Minecraft Usernames", type: "array", subtype: "text", placeholder: "Username" },
      {
        key: "serverIps",
        label: "Server IPs",
        type: "array",
        subtype: "text",
        placeholder: "play.example.com",
        optional: true,
      },
      {
        key: "uuids",
        label: "UUIDs",
        type: "array",
        subtype: "text",
        placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
  telegram: {
    label: "Telegram",
    schema: v.object({
      platform: v.literal("telegram"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      phoneNumbers: v.optional(v.array(v.string()), []),
      groupLinks: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "Telegram Usernames", type: "array", subtype: "text", placeholder: "@username" },
      {
        key: "phoneNumbers",
        label: "Phone Numbers",
        type: "array",
        subtype: "text",
        placeholder: "+1234567890",
        optional: true,
      },
      {
        key: "groupLinks",
        label: "Group/Channel Links",
        type: "array",
        subtype: "url",
        placeholder: "https://t.me/...",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
  instagram: {
    label: "Instagram",
    schema: v.object({
      platform: v.literal("instagram"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      profileUrls: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "Instagram Usernames", type: "array", subtype: "text", placeholder: "@username" },
      {
        key: "profileUrls",
        label: "Profile URLs",
        type: "array",
        subtype: "url",
        placeholder: "https://instagram.com/username",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
  tiktok: {
    label: "TikTok",
    schema: v.object({
      platform: v.literal("tiktok"),
      usernames: v.pipe(v.array(v.string()), v.minLength(1, "At least one username is required")),
      profileUrls: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      videoUrls: v.optional(v.array(v.pipe(v.string(), v.url("Must be a valid URL"))), []),
      reason: v.pipe(v.string(), v.minLength(10, "Reason must be at least 10 characters")),
      proof: v.optional(v.any()),
    }),
    fields: [
      { key: "usernames", label: "TikTok Usernames", type: "array", subtype: "text", placeholder: "@username" },
      {
        key: "profileUrls",
        label: "Profile URLs",
        type: "array",
        subtype: "url",
        placeholder: "https://tiktok.com/@username",
        optional: true,
      },
      {
        key: "videoUrls",
        label: "Video URLs",
        type: "array",
        subtype: "url",
        placeholder: "https://tiktok.com/@username/video/...",
        optional: true,
      },
      { key: "reason", label: "Reason for Report", type: "textarea", placeholder: "Describe the harmful behavior..." },
      { key: "proof", label: "Upload Proof", type: "file", optional: true },
    ],
  },
}

// Create union schema from all platform schemas
const reportSchema = v.union(Object.values(platformSchemas).map((p) => p.schema))

type Report = v.InferInput<typeof reportSchema>

interface ReportFormProps {
  report: Partial<Report>
  onUpdate: (report: Partial<Report>) => void
  onRemove: () => void
  errors: Record<string, string>
}

function ReportForm({ report, onUpdate, onRemove, errors }: ReportFormProps) {
  const platformConfig = report.platform ? platformSchemas[report.platform as keyof typeof platformSchemas] : null

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onUpdate({ ...report, proof: file })
    }
  }

  const addArrayItem = (key: string) => {
    const currentArray = (report as any)[key] || []
    onUpdate({ ...report, [key]: [...currentArray, ""] })
  }

  const removeArrayItem = (key: string, index: number) => {
    const currentArray = (report as any)[key] || []
    const newArray = currentArray.filter((_: any, i: number) => i !== index)
    onUpdate({ ...report, [key]: newArray })
  }

  const updateArrayItem = (key: string, index: number, value: string) => {
    const currentArray = (report as any)[key] || []
    const newArray = [...currentArray]
    newArray[index] = value
    onUpdate({ ...report, [key]: newArray })
  }

  const renderArrayField = (field: any) => {
    const { key, label, subtype, placeholder, optional } = field
    const values = (report as any)[key] || [""]
    const hasError = errors[key]

    return (
      <div key={key} className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-medium text-primary">
            {label} {optional && <span className="text-primary">(Optional)</span>}
          </Label>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => addArrayItem(key)}
            className="text-primary hover:text-primary hover:bg-primary/10 h-6 w-6 p-0"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-2">
          {values.map((value: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                type={subtype}
                value={value}
                onChange={(e) => updateArrayItem(key, index, e.target.value)}
                placeholder={placeholder}
                className={`text-xs h-9 flex-1 ${hasError ? "border-red-500 focus-visible:ring-red-500/50" : ""}`}
              />
              {values.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem(key, index)}
                  className="text-red-400 hover:text-red-400 hover:bg-red-400/10 h-9 w-9 p-0 flex-shrink-0"
                >
                  <Minus className="w-3 h-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
        {hasError && <p className="text-xs text-red-400">{hasError}</p>}
      </div>
    )
  }

  const renderField = (field: any) => {
    const { key, label, type, placeholder, optional } = field
    const value = (report as any)[key] || ""
    const hasError = errors[key]

    if (type === "array") {
      return renderArrayField(field)
    }

    switch (type) {
      case "textarea":
        return (
          <div key={key} className="space-y-2">
            <Label htmlFor={key} className="text-xs font-medium text-primary">
              {label} {optional && <span className="text-primary">(Optional)</span>}
            </Label>
            <Textarea
              id={key}
              value={value}
              onChange={(e) => onUpdate({ ...report, [key]: e.target.value })}
              placeholder={placeholder}
              className={`min-h-[70px] text-xs ${hasError ? "border-red-500 focus-visible:ring-red-500/50" : ""}`}
            />
            {hasError && <p className="text-xs text-red-400">{hasError}</p>}
          </div>
        )
      case "file":
        return (
          <div key={key} className="space-y-2">
            <Label htmlFor={key} className="text-xs font-medium text-primary">
              {label} {optional && <span className="text-primary">(Optional)</span>}
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id={key}
                type="file"
                onChange={handleFileUpload}
                accept="image/*,.pdf,.txt,.doc,.docx"
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById(key)?.click()}
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary/70 text-xs h-8 bg-secondary/30"
              >
                <Upload className="w-3 h-3 mr-1" />
                {(report as any)[key] ? "File Selected" : "Choose File"}
              </Button>
              {(report as any)[key] && (
                <span className="text-xs text-primary truncate max-w-[120px]">
                  {((report as any)[key] as File).name}
                </span>
              )}
            </div>
          </div>
        )
      default:
        return (
          <div key={key} className="space-y-2">
            <Label htmlFor={key} className="text-xs font-medium text-primary">
              {label} {optional && <span className="text-primary">(Optional)</span>}
            </Label>
            <Input
              id={key}
              type={type}
              value={value}
              onChange={(e) => onUpdate({ ...report, [key]: e.target.value })}
              placeholder={placeholder}
              className={`text-xs h-9 ${hasError ? "border-red-500 focus-visible:ring-red-500/50" : ""}`}
            />
            {hasError && <p className="text-xs text-red-400">{hasError}</p>}
          </div>
        )
    }
  }

  return (
    <Card className="bg-secondary/40 border-secondary/60 w-80 flex-shrink-0 shadow-lg backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm text-primary">
          {platformConfig ? `${platformConfig.label} Report` : "New Report"}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="text-primary hover:text-red-400 hover:bg-red-400/10 h-6 w-6 p-0"
        >
          <X className="w-3 h-3" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 pt-0 pb-6">
        <div className="space-y-2">
          <Label htmlFor="platform" className="text-xs font-medium text-primary">
            Platform
          </Label>
          <Select
            value={report.platform || ""}
            onValueChange={(value) => onUpdate({ platform: value as any, usernames: [""], reason: "" })}
          >
            <SelectTrigger
              className={`text-xs h-9 ${errors.platform ? "border-red-500 focus:ring-red-500/50" : "border-secondary/50"}`}
            >
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(platformSchemas).map(([key, config]) => (
                <SelectItem key={key} value={key} className="text-xs">
                  {config.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.platform && <p className="text-xs text-red-400">{errors.platform}</p>}
        </div>

        {platformConfig && platformConfig.fields.map(renderField)}
      </CardContent>
    </Card>
  )
}

// Helper function to format reports into a structured list
const formatReportsForSubmission = (reports: Report[]) => {
  return reports.map((report, index) => {
    const platformConfig = platformSchemas[report.platform as keyof typeof platformSchemas]
    const timestamp = new Date()

    const formattedReport: any = {
      reportId: `RPT-${timestamp.getFullYear()}${String(timestamp.getMonth() + 1).padStart(2, "0")}${String(timestamp.getDate()).padStart(2, "0")}-${String(timestamp.getHours()).padStart(2, "0")}${String(timestamp.getMinutes()).padStart(2, "0")}-${String(index + 1).padStart(3, "0")}`,
      platform: platformConfig.label,
      submissionTime: timestamp.toISOString(),
      submissionDate: timestamp.toLocaleDateString(),
      submissionTimeLocal: timestamp.toLocaleTimeString(),
      reportNumber: index + 1,
      totalReports: reports.length,
      details: {},
      summary: {
        hasEvidence: false,
        fieldCount: 0,
        urgencyLevel: "standard",
      },
    }

    let fieldCount = 0
    let hasEvidence = false

    // Format each field based on its type
    platformConfig.fields.forEach((field) => {
      const value = (report as any)[field.key]
      if (value !== undefined && value !== null) {
        if (field.type === "array") {
          // Filter out empty strings and format arrays
          const filteredArray = Array.isArray(value) ? value.filter((item: string) => item.trim() !== "") : []
          if (filteredArray.length > 0) {
            formattedReport.details[field.label] = filteredArray
            fieldCount++
          }
        } else if (field.type === "file") {
          // Handle file uploads
          if (value instanceof File) {
            formattedReport.details[field.label] = {
              fileName: value.name,
              fileSize: `${(value.size / 1024).toFixed(2)} KB`,
              fileType: value.type,
              lastModified: new Date(value.lastModified).toISOString(),
            }
            hasEvidence = true
            fieldCount++
          }
        } else if (typeof value === "string" && value.trim() !== "") {
          formattedReport.details[field.label] = value.trim()
          fieldCount++
        }
      }
    })

    // Update summary
    formattedReport.summary.hasEvidence = hasEvidence
    formattedReport.summary.fieldCount = fieldCount
    formattedReport.summary.urgencyLevel = hasEvidence ? "high" : "standard"

    return formattedReport
  })
}

export default function ReportSection() {
  const [reports, setReports] = useState<Partial<Report>[]>([])
  const [errors, setErrors] = useState<Record<number, Record<string, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const addReport = () => {
    setReports([...reports, {}])
  }

  const updateReport = (index: number, report: Partial<Report>) => {
    const newReports = [...reports]
    newReports[index] = report
    setReports(newReports)

    // Clear errors for this report when updating
    if (errors[index]) {
      const newErrors = { ...errors }
      delete newErrors[index]
      setErrors(newErrors)
    }
  }

  const removeReport = (index: number) => {
    const newReports = reports.filter((_, i) => i !== index)
    setReports(newReports)

    // Clear errors for this report
    const newErrors = { ...errors }
    delete newErrors[index]
    setErrors(newErrors)
  }

  const validateReports = () => {
    const newErrors: Record<number, Record<string, string>> = {}
    let hasErrors = false

    reports.forEach((report, index) => {
      try {
        v.parse(reportSchema, report)
      } catch (error) {
        if (error instanceof v.ValiError) {
          const reportErrors: Record<string, string> = {}
          error.issues.forEach((issue) => {
            if (issue.path) {
              const key = issue.path[0]?.key as string
              if (key) {
                reportErrors[key] = issue.message
              }
            }
          })
          newErrors[index] = reportErrors
          hasErrors = true
        }
      }
    })

    setErrors(newErrors)
    return !hasErrors
  }

  const WEBHOOK_URL = "https://discord.com/api/webhooks/1400929806270599369/SIwtGVRus9sWNnd8qSzKovVrjd0erRMbW7M4C4jU1JD13liL68MPr2KT5tSdLmX6I59u"
  
  const handleSubmit = async () => {
    if (!validateReports()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in your reports before submitting.",
        variant: "destructive",
      })
      return
    }
  
    setIsSubmitting(true)
  
    try {
      const validReports = reports.filter((r) => r.platform) as Report[]
      const formattedReports = formatReportsForSubmission(validReports)
  
      for (let i = 0; i < formattedReports.length; i++) {
        const report = formattedReports[i]
        const original = validReports[i]
        const formData = new FormData()
  
        const file = original.proof instanceof File ? original.proof : null
        const isImage = file && file.type.startsWith("image/")
  
        // Extract key information from report details
        const platformConfig = platformSchemas[original.platform as keyof typeof platformSchemas]
        const usernames = report.details[platformConfig?.fields.find(f => f.key === "usernames")?.label || "Usernames"] || []
        const reason = report.details["Reason for Report"] || "No reason provided"
        const targetNames = Array.isArray(usernames) && usernames.length > 0 ? usernames.join(", ") : "Unknown User"
        const primaryTarget = Array.isArray(usernames) && usernames.length > 0 ? usernames[0] : "Unknown User"
        
        // Build fields dynamically based on platform
        const fields = [
          {
            name: "🕵️‍♂️ Reporter",
            value: "Anonymous Reporter",
            inline: true
          },
          {
            name: "🎯 Target",
            value: targetNames,
            inline: true
          },
          {
            name: "📱 Platform",
            value: platformConfig?.label || "Unknown",
            inline: true
          }
        ]
        
        // Add platform-specific fields
        if (platformConfig) {
          platformConfig.fields.forEach(field => {
            if (field.key !== "usernames" && field.key !== "reason" && field.key !== "proof") {
              const value = report.details[field.label]
              if (value && (Array.isArray(value) ? value.length > 0 : value.trim() !== "")) {
                fields.push({
                  name: `📋 ${field.label}`,
                  value: Array.isArray(value) ? value.join(", ") : value,
                  inline: field.key.includes("Links") || field.key.includes("Urls") || field.key.includes("IPs")
                })
              }
            }
          })
        }
        
        // Add reason field
        fields.push({
          name: "📄 Reason",
          value: reason,
          inline: false
        })
        
        const embed = {
          title: `🚨 New Report: ${primaryTarget}`,
          color: 0xFF5555,
          description: "A user has been reported. Details below:",
          fields,
          timestamp: report.submissionTime,
          footer: {
            text: `🆔 Report ID: ${report.reportId}`
          },
          author: {
            name: `Anonymous Reporter reported ${primaryTarget}`,
            icon_url: null
          },
          ...(isImage ? { image: { url: `attachment://${file.name}` } } : {})
        }
  
        formData.append("payload_json", JSON.stringify({ embeds: [embed] }))
        if (file) {
          formData.append("file", file, file.name) // ✅ key changed from "files[0]" to "file"
        }
  
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          body: formData,
        })
  
        if (!res.ok) {
          const errorText = await res.text()
          throw new Error(`Failed to submit report ${i + 1}: ${errorText}`)
        }
      }
  
      toast({
        title: "Reports Submitted Successfully!",
        description: `${formattedReports.length} report(s) submitted.`,
      })
  
      setReports([])
      setErrors({})
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your reports. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }  

  return (
    <section id="report" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Make a Difference?</h2>
          <p className="text-xl text-primary mb-8 max-w-3xl mx-auto">
            Know someone who's preying on others online? We'll investigate, document everything, and make sure law
            enforcement has what they need to take action.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={addReport} className="bg-primary hover:bg-primary/90 text-background px-8 py-3">
              <Plus className="w-5 h-5 mr-2" />
              Add Report
            </Button>

            {reports.length > 0 && (
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-background px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Submitting..." : `Submit All Reports (${reports.length})`}
              </Button>
            )}
          </div>

          {reports.length > 0 && (
            <div className="overflow-x-auto pb-4 reports-scroll">
              <div className={`flex gap-6 ${reports.length <= 3 ? "justify-center" : "min-w-max"}`}>
                {reports.map((report, index) => (
                  <ReportForm
                    key={index}
                    report={report}
                    onUpdate={(updatedReport) => updateReport(index, updatedReport)}
                    onRemove={() => removeReport(index)}
                    errors={errors[index] || {}}
                  />
                ))}
              </div>
            </div>
          )}

          {reports.length === 0 && (
            <div className="text-center py-12">
              <p className="text-primary mb-4">No reports created yet.</p>
              <p className="text-sm text-primary">Click "Add Report" to get started.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
