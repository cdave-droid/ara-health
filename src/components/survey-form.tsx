'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Send } from 'lucide-react'

export function SurveyForm() {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    painPoints: '',
    suggestions: '',
    email: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-inter font-semibold text-ara-navy mb-2">
            Thank You for Your Feedback!
          </h3>
          <p className="text-gray-600">
            Your insights will help us build a better advance-care planning experience.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-ara-navy text-2xl">Help Us Improve</CardTitle>
        <CardDescription>
          Share your experience with advance-care planning to help us build better tools.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              I am a...
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ara-blue focus:border-transparent"
            >
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="caregiver">Caregiver</option>
              <option value="family-member">Family Member</option>
              <option value="healthcare-provider">Healthcare Provider</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              How would you rate your experience with advance-care planning?
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ara-blue focus:border-transparent"
            >
              <option value="">Select your experience</option>
              <option value="very-difficult">Very Difficult</option>
              <option value="difficult">Difficult</option>
              <option value="neutral">Neutral</option>
              <option value="easy">Easy</option>
              <option value="very-easy">Very Easy</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="painPoints" className="block text-sm font-medium text-gray-700 mb-1">
              What are the biggest challenges you face with advance-care planning?
            </label>
            <textarea
              id="painPoints"
              name="painPoints"
              value={formData.painPoints}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ara-blue focus:border-transparent"
              placeholder="Describe the challenges you've encountered..."
            />
          </div>
          
          <div>
            <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700 mb-1">
              What would make advance-care planning easier for you?
            </label>
            <textarea
              id="suggestions"
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ara-blue focus:border-transparent"
              placeholder="Share your ideas for improvement..."
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional - for updates)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ara-blue focus:border-transparent"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-ara-blue hover:bg-ara-blue/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 