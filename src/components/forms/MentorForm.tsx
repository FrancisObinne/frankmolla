import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MentorApplicationSchema, MentorFormValues } from "@/schemas/signup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// You can reuse the same list, just label it as "Expertise"
const AREAS_OF_EXPERTISE = [
  "Leading Self (emotional regulation, decision-making, personal clarity)",
  "Leading Teams (culture-building, feedback, conflict resolution)",
  "Leadership Mindset (confidence, humility, strategic presence)",
  "Sales & Influence (client engagement, storytelling, trust-building)",
  "Negotiation & Agreements (conflict navigation, dignified deal-making)",
  "Career Growth & Transitions (promotion, reinvention, legacy)",
  "Strategic Communication (executive presence, clarity under pressure)",
  "Relationship Building (mentorship, networks, nourishing partnerships)",
  "Adaptive Strategy (leading through uncertainty, systems thinking)",
] as const;

interface MentorFormProps {
  onSubmit: (values: MentorFormValues) => void;
  isSubmitting: boolean;
}

export const MentorForm = ({ onSubmit, isSubmitting }: MentorFormProps) => {
  const form = useForm<MentorFormValues>({
    resolver: zodResolver(MentorApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      linkedinProfile: "",
      roleTitle: "",
      organization: "",
      yearsOfExperience: 0,
      areasOfExpertise: [],
      mentoringPhilosophy: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 1: Your Information
          </h3>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="linkedinProfile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Profile URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://linkedin.com/in/yourname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roleTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Role / Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Organization</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years of Professional Experience</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value) || 0)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 2: Your Expertise
          </h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="areasOfExpertise"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Areas of Expertise
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Select all areas where you can provide mentorship.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {AREAS_OF_EXPERTISE.map((area) => (
                      <FormField
                        key={area}
                        control={form.control}
                        name="areasOfExpertise"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={area}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(area)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, area])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== area
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {area}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Section 3: Your Approach
          </h3>
          <FormField
            control={form.control}
            name="mentoringPhilosophy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mentoring Philosophy</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your approach to helping others grow..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Mentor Application
        </Button>
      </form>
    </Form>
  );
};
