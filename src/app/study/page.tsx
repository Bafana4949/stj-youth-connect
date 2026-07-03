import { redirect } from "next/navigation";

export default function DeprecatedStudyPage() {
  // Redirect to the new study-applications route automatically
  redirect("/study-applications");
}
