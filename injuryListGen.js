import fs from 'fs'

const injuries = [
  { "injury": "Abrasion" },
  { "injury": "Sprain" },
  { "injury": "Fracture" },
  { "injury": "Contusion" },
  { "injury": "Laceration" },
  { "injury": "Dislocation" },
  { "injury": "Concussion" },
  { "injury": "Burn" },
  { "injury": "Strain" },
  { "injury": "Dislocation" },
  { "injury": "Whiplash" },
  { "injury": "Ligament Tear" },
  { "injury": "Muscle Tear" },
  { "injury": "Bone Bruise" },
  { "injury": "Puncture" },
  { "injury": "Fractured Rib" },
  { "injury": "Sprained Ankle" },
  { "injury": "Torn Meniscus" },
  { "injury": "ACL Injury" },
  { "injury": "MCL Injury" },
  { "injury": "Patellar Tendonitis" },
  { "injury": "Achilles Tendon Rupture" },
  { "injury": "Hamstring Strain" },
  { "injury": "Groin Pull" },
  { "injury": "Carpal Tunnel Syndrome" },
  { "injury": "Tennis Elbow" },
  { "injury": "Shin Splints" },
  { "injury": "Turf Toe" },
  { "injury": "Stress Fracture" },
  { "injury": "Heat Exhaustion" },
  { "injury": "Heat Stroke" },
  { "injury": "Hypothermia" },
  { "injury": "Sunburn" },
  { "injury": "Frostbite" },
  { "injury": "Dehydration" },
  { "injury": "Compartment Syndrome" },
  { "injury": "Herniated Disc" },
  { "injury": "Subluxation" },
  { "injury": "Tendonitis" },
  { "injury": "Rotator Cuff Tear" },
  { "injury": "Collarbone Fracture" },
  { "injury": "Tibial Fracture" },
  { "injury": "Fibula Fracture" },
  { "injury": "Pelvic Fracture" },
  { "injury": "Spondylolisthesis" },
  { "injury": "Dislocated Shoulder" },
  { "injury": "Dislocated Elbow" },
  { "injury": "Dislocated Knee" },
  { "injury": "Torn Labrum" },
  { "injury": "Spinal Cord Injury" },
  { "injury": "Brain Injury" },
  { "injury": "Pneumothorax" },
  { "injury": "Internal Bleeding" },
  { "injury": "Fractured Skull" },
  { "injury": "Facial Fracture" },
  { "injury": "Eye Injury" },
  { "injury": "Ear Injury" },
  { "injury": "Tooth Fracture" },
  { "injury": "Infection" },
  { "injury": "Severed Limb" },
  { "injury": "Dissected Aorta" },
  { "injury": "Fallen Object Injury" },
  { "injury": "Electrical Burn" },
  { "injury": "Chemical Burn" },
  { "injury": "Radiation Burn" },
  { "injury": "Cardiac Arrest" },
  { "injury": "Ruptured Appendix" },
  { "injury": "Ruptured Spleen" },
  { "injury": "Pulled Muscle" },
  { "injury": "Crush Injury" },
  { "injury": "Stab Wound" },
  { "injury": "Gunshot Wound" },
  { "injury": "Animal Bite" },
  { "injury": "Human Bite" },
  { "injury": "Electrocution" },
  { "injury": "Cold Burn" },
  { "injury": "Brachial Plexus Injury" },
  { "injury": "Pelvic Dislocation" },
  { "injury": "Knee Sprain" },
  { "injury": "Ankle Sprain" },
  { "injury": "Wrist Sprain" },
  { "injury": "Hip Fracture" },
  { "injury": "Jaw Fracture" },
  { "injury": "Clavicle Fracture" },
  { "injury": "Scaphoid Fracture" },
  { "injury": "Hand Fracture" },
  { "injury": "Foot Fracture" },
  { "injury": "Elbow Dislocation" },
  { "injury": "Finger Dislocation" },
  { "injury": "Toe Fracture" },
  { "injury": "Bone Spur" },
  { "injury": "Cartilage Damage" },
  { "injury": "Acromioclavicular Sprain" },
  { "injury": "Trapezius Strain" },
  { "injury": "Deltoid Injury" },
  { "injury": "Quadriceps Strain" },
  { "injury": "Adductor Strain" },
  { "injury": "Peroneal Nerve Injury" },
  { "injury": "Bursitis" },
  { "injury": "Torn Ligament" },
  { "injury": "Scald Burn" },
  { "injury": "Abrasive Injury" }
]
console.log(injuries.length)
const output = []

for (let index = 0; index < 10; index++) {
    let injuryQuantity = Math.floor(Math.random() * (5 - 1) + 1)
    let chosenInjuries = {}
    for (let index2 = 0; index2 < injuryQuantity; index2++) {
        let injuriesIndex = Math.floor(Math.random() * injuries.length)
        chosenInjuries = Object.assign(chosenInjuries, {[index2]: injuries[injuriesIndex].injury})
    }
    output.push({
        patientID: index,
        injuries: Object.values(chosenInjuries),
        priority: null
    })
}

let jsonString = JSON.stringify(output,null,2)
console.log(jsonString)

fs.writeFile('injuryList.json', jsonString, function (err) {
  if (err) throw err
  console.log('Saved!')
})