import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Profile from "../components/profile/profile";
const About = () => {
  return (
    <Layout>
      <SEO
        title="Βιογραφικό"
        keywords={[`Ελένη Σουμελίδου`, `Βιογραφικό`, `Ψυχολόγος Νέα Σμύρνη`]}
      />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "book.jpg" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <div style={{ position: "relative" }}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              // style={{ height: "400px" }}
              style={{ height: "100vh" }}
            />
            <HeroText title="Βιογραφικό" styles={{ textAlign: "center" }} />
          </div>
        )}
      />

      <div
        className="container main-content"
        style={{ marginTop: "52px", zIndex: "100", position: "relative" }}
      >
        <div className="row">
          <div class="col-md-8">
            <h4> Ελένη Σουμελίδου</h4>
            <h5 style={{ marginBottom: "24px" }}>
              Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια - Αναλύτρια Ομάδας,
              Ζεύγους & Οικογένειας
            </h5>
            <p>Η Ελένη Σουμελίδου γεννήθηκε και μεγάλωσε στην Αθήνα.</p>

            <p>
              Απέκτησε το πτυχίο της ψυχολογίας από το Αμερικάνικο Κολλέγιο
              Ελλάδος και συνέχισε με μεταπτυχιακές σπουδές στο Πανεπιστήμιο του
              KENT στην Αγγλία. Το μεταπτυχιακό αφορά στις ψυχοθεραπευτικές
              σπουδές (MSc in Psychotherapy studies).
            </p>
          </div>
          <div class="col-md-4">
            <Profile />
          </div>
        </div>
        <p>
          Εκεί, μελέτησε όλα τα μοντέλα ψυχοθεραπείας με κυρίως έμφαση στο
          ψυχαναλυτικό μοντέλο. Το διάστημα εκείνο, δούλεψε εθελοντικά στο
          νοσοκομείο St.Martins με ασθενείς σε ατομικό αλλά και ομαδικό πλαίσιο.
        </p>
        <p style={{ marginBottom: "24px" }}>
          Η εκπαίδευσή της συνεχίστηκε με την ολοκλήρωση του πενταετούς
          προγράμματος σπουδών της Ελληνικής Εταιρείας Αναλυτικής Ομαδικής και
          Οικογενειακής Ψυχοθεραπείας, στην προσέγγιση της ομαδικής ανάλυσης,
          της οικογενειακής ψυχοθεραπείας και της ψυχοθεραπείας ζεύγους.
          Επιπροσθέτως, ολοκλήρωσε με επιτυχία το εκπαιδευτικό πρόγραμμα του
          International Psychotherapy Institute όπου εξειδικεύτηκε στην
          ψυχοθεραπεία ζεύγους. Ακόμη, εκπαιδεύτηκε από την ISON Psychometrica
          στη ψυχολογική εκτίμηση και στη ψυχομετρική ανάλυση του τεστ θεματικής
          αντίληψης ΤΑΤ για την αξιολόγηση διαταραχών συμπεριφοράς,
          ψυχοσωματικών ασθενειών, νευρώσεων και ψυχώσεων, καθώς και του τεστ
          προσωπικότητας MMPI-2 για την αξιολόγηση της ενήλικης ψυχοπαθολογίας.
          Τα τελευταια χρόνια ανέπτυξε ενδιαφέρον για την ψυχολογια των παιδιών
          και ολοκλήρωσε με επιτυχία το πρόγραμμα του Εθνικού και Καποδιστριακού
          Πανεπιστημίου Αθηνών με τίτλο Παιδοψυχολογία: Ψυχολογία βρέφους και
          παιδιου προσχολικής ηλικίας.
        </p>
        <p style={{ marginTop: "24px" }}>
          Είναι μέλος του British Psychological society (BPS) και του Canterbury
          Consortium of Psychoanalytic and Psychodynamic Psychotherapists
          (CCOPPP). Επίσης, είναι πρόσεδρο μέλος της Ελληνικής Εταιρείας
          Αναλυτικής Ομαδικής και Οικογενειακής Ψυχοθεραπείας.
        </p>
        <p>
          Διατηρεί προσωπικό γραφείο από το 2010, ενώ από το 2015 εργάζεται στο
          Ινστιτούτο Δημόσιας Υγείας του Αμερικανικού Κολλεγίου Ελλάδος το οποίο
          στοχεύει στην ανάπτυξη επιστημονικών, ερευνητικών και εκπαιδευτικών
          δραστηριοτήτων στον τομέα της Δημόσιας Υγείας καθώς και στην
          υποστήριξη της πρωτοβουλίας SmokefreeGreece. Η πρωτοβουλία αυτή, είναι
          μια σειρά συντονισμένων δράσεων με κύριο αντικείμενο τη πρόληψη και τη
          μείωση του καπνίσματος. Τέλος, από το 2016 είναι επιστημονική
          συνεργάτιδα του ΟΠΑΠ στο πλαίσιο του προγράμματος «Αθλητικές ακαδημίες
          ΟΠΑΠ».
        </p>
      </div>
    </Layout>
  );
};

export default About;
