document.addEventListener("DOMContentLoaded", function () {
    var engButton = document.getElementById("eng");
    var hinButton = document.getElementById("hin");
    var sansButton = document.getElementById("sans");
    var container = document.getElementById("hanumanChalisaContainer");
    var containerContent = container.querySelector(".container-content");

    engButton.addEventListener("click", function () {
        var englishChalisaContent = `<h1>Hanuman chalisa in english</h1>
                     ॥Doha॥</BR></BR>
        Shri Guru Charan Saroj Raj
        Nij mane mukure sudhar</BR>
        Varnao Raghuvar Vimal Jasu
        Jo dayaku phal char</BR>        </BR>

         
        Budhi Hin Tanu Janike
        Sumirau Pavan Kumar</BR>
        Bal budhi Vidya dehu mohe
        Harahu Kalesa Vikar</BR>
        </BR>        </BR>

        ॥Chaupai॥</BR></BR>
        Jai Hanuman gyan gun sagar
        Jai Kapis tihun lok ujagar
        </BR>
        Ram doot atulit bal dhama
        Anjani-putra Pavan sut nama
        </BR>        </BR>

        Mahavir Vikram Bajrangi
        Kumati nivar sumati Ke sangi
        </BR>
        Kanchan varan viraj subesa
        Kanan Kundal Kunchit Kesa
        </BR>        </BR>

        Hath Vajra Aur Dhuvaje Viraje
        Kandhe moonj janehu sajai
        </BR>
        Sankar suvan kesri Nandan
        Tej pratap maha jag vandan
        </BR>        </BR>

        Vidyavan guni ati chatur
        Ram kaj karibe ko aatur
        </BR>
        Prabu charitra sunibe ko rasiya
        Ram Lakhan Sita man Basiya
        </BR>        </BR>

        Sukshma roop dhari Siyahi dikhava
        Vikat roop dhari lanka jarava
        </BR>
        Bhima roop dhari asur sanghare
        Ramachandra ke kaj sanvare
        </BR>         </BR>
        
        Laye Sanjivan Lakhan Jiyaye
        Shri Raghuvir Harashi ur laye
        </BR>
        Raghupati Kinhi bahut badai
        Tum mam priye Bharat-hi sam bhai
        </BR>        </BR>

        Sahas badan tumharo yash gaave
        Us kahi Shripati kanth lagaave
        </BR>
        Sankadik Brahmadi Muneesa
        Narad Sarad sahit Aheesa
        </BR>        </BR>

        Yam Kuber Digpal Jahan te
        Kavi kovid kahi sake kahan te
        </BR>
        Tum upkar Sugreevahin keenha
        Ram milaye rajpad deenha
        </BR>        </BR>

        Tumharo mantra Vibheeshan mana
        Lankeshwar Bhaye Sub jag jana
        </BR>
        Yug sahastra jojan par Bhanu
        Leelyo tahi madhur phal janu
        </BR>        </BR>

        Prabhu mudrika meli mukh mahee
        Jaladhi langhi gaye achraj nahee
        </BR>
        Durgaam kaj jagat ke jete
        Sugam anugraha tumhre tete
        </BR>        </BR>

        Ram dware tum rakhvare,
        Hoat na agya binu paisare
        </BR>
        Sub sukh lahai tumhari sarna
        Tum rakshak kahu ko dar na
        </BR>        </BR>

        Aapan tej samharo aapai
        Teenhon lok hank te kanpai
        </BR>
        Bhoot pisach Nikat nahin aavai
        Mahavir jab naam sunavai
        </BR>        </BR>

        Nase rog harai sab peera
        Japat nirantar Hanumant beera
        </BR>
        Sankat se Hanuman chudavai
        Man Karam Vachan dyan jo lavai
        </BR>        </BR>

        Sub par Ram tapasvee raja
        Tin ke kaj sakal Tum saja
        </BR>
        Aur manorath jo koi lavai
        Sohi amit jeevan phal pavai
        </BR>        </BR>

        Charon Yug partap tumhara
        Hai persidh jagat ujiyara
        </BR>
        Sadhu Sant ke tum Rakhware
        Asur nikandan Ram dulhare
        </BR>        </BR>

        Ashta sidhi nav nidhi ke dhata
        Us var deen Janki mata
        </BR>
        Ram rasayan tumhare pasa
        Sada raho Raghupati ke dasa
        </BR>        </BR>

        Tumhare bhajan Ram ko pavai
        Janam janam ke dukh bisravai
         
        </BR>

         
         
        Anth kaal Raghuvir pur jayee
        Jahan janam Hari-Bakht Kahayee
        </BR>        </BR>

         
        Aur Devta Chit na dharehi
        Hanumanth se hi sarve sukh karehi
        </BR>
 
        Sankat kate mite sab peera
        Jo sumirai Hanumat Balbeera
        </BR>        </BR>


        Jai Jai Jai Hanuman Gosahin
        Kripa Karahu Gurudev ki nyahin
        </BR>

        Jo sat bar path kare kohi
        Chutehi bandhi maha sukh hohi
        </BR>
        </BR>

        Jo yah padhe Hanuman Chalisa
        Hoye siddhi sakhi Gaureesa
        </BR>

        Tulsidas sada hari chera
        Keejai Das Hrdaye mein dera
        </BR>
        </BR>

        ॥Doha॥
        </BR>
        </BR>
        Pavantnai sankar haran,
        Mangal murti roop.        </BR>

        Ram Lakhan Sita sahit,
        Hrdaye basahu sur bhoop.        </BR>

    `;
        showHanumanChalisa(englishChalisaContent);
    });


    hinButton.addEventListener("click", function () {
        var hindiChalisaContent = `<h1>Hanuman chalisa in hindi</h1>
        दोहा</br></br>
        श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।
        </br>
        बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥
        </br></br>
        बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार</br>
        बल बुधि विद्या देहु मोहि, हरहु कलेश विकार</br></br></br>
        
        चौपाई</br></br>
        
        जय हनुमान ज्ञान गुन सागर</br>
        जय कपीस तिहुँ लोक उजागर॥१॥</br></br>
        
        राम दूत अतुलित बल धामा</br>
        अंजनि पुत्र पवनसुत नामा॥२॥</br></br>
        
        महाबीर बिक्रम बजरंगी</br>
        कुमति निवार सुमति के संगी॥३॥</br>
        </br>
        कंचन बरन बिराज सुबेसा</br>
        कानन कुंडल कुँचित केसा॥४॥</br></br>
        
        हाथ बज्र अरु ध्वजा बिराजे</br>
        काँधे मूँज जनेऊ साजे॥५॥</br></br>
        
        शंकर सुवन केसरी नंदन</br>
        तेज प्रताप महा जगवंदन॥६॥</br></br>
        
        विद्यावान गुनी अति चातुर</br>
        राम काज करिबे को आतुर॥७॥</br></br>
        
        प्रभु चरित्र सुनिबे को रसिया</br>
        राम लखन सीता मनबसिया॥८॥</br></br>
        
        सूक्ष्म रूप धरि सियहि दिखावा</br>
        विकट रूप धरि लंक जरावा॥९॥</br></br>
        
        भीम रूप धरि असुर सँहारे</br>
        रामचंद्र के काज सवाँरे॥१०॥</br></br>
        
        लाय सजीवन लखन जियाए</br>
        श्री रघुबीर हरषि उर लाए॥११॥</br></br>
        
        रघुपति कीन्ही बहुत बड़ाई</br>
        तुम मम प्रिय भरत-हि सम भाई॥१२॥</br></br>
        
        सहस बदन तुम्हरो जस गावै</br>
        अस कहि श्रीपति कंठ लगावै॥१३॥</br></br>
        
        सनकादिक ब्रह्मादि मुनीसा</br>
        नारद सारद सहित अहीसा॥१४॥</br></br>
        
        जम कुबेर दिगपाल जहाँ ते</br>
        कवि कोविद कहि सके कहाँ ते॥१५॥</br></br>
        
        तुम उपकार सुग्रीवहि कीन्हा</br>
        राम मिलाय राज पद दीन्हा॥१६॥</br></br>
        
        तुम्हरो मंत्र बिभीषण माना</br>
        लंकेश्वर भये सब जग जाना॥१७॥</br></br>
        
        जुग सहस्त्र जोजन पर भानू</br>
        लिल्यो ताहि मधुर फ़ल जानू॥१८॥</br></br>
        
        प्रभु मुद्रिका मेलि मुख माही</br>
        जलधि लाँघि गए अचरज नाही॥१९॥</br></br>
        
        दुर्गम काज जगत के जेते</br>
        सुगम अनुग्रह तुम्हरे तेते॥२०॥</br></br>
        
        राम दुआरे तुम रखवारे</br>
        होत ना आज्ञा बिनु पैसारे॥२१॥</br></br>
        
        सब सुख लहैं तुम्हारी सरना</br>
        तुम रक्षक काहु को डरना॥२२॥</br></br>
        
        आपन तेज सम्हारो आपै</br>
        तीनों लोक हाँक तै कापै॥२३॥</br></br>
        
        भूत पिशाच निकट नहि आवै</br>
        महावीर जब नाम सुनावै॥२४॥</br></br>
        
        नासै रोग हरे सब पीरा</br>
        जपत निरंतर हनुमत बीरा॥२५॥</br></br>
        
        संकट तै हनुमान छुडावै</br>
        मन क्रम वचन ध्यान जो लावै॥२६॥</br></br>
        
        सब पर राम तपस्वी राजा</br>
        तिनके काज सकल तुम साजा॥२७॥</br></br>
        
        और मनोरथ जो कोई लावै</br>
        सोई अमित जीवन फल पावै॥२८॥</br></br>
        
        चारों जुग परताप तुम्हारा</br>
        है परसिद्ध जगत उजियारा॥२९॥</br></br>
        
        साधु संत के तुम रखवारे</br>
        असुर निकंदन राम दुलारे॥३०॥</br></br>
        
        अष्ट सिद्धि नौ निधि के दाता</br>
        अस बर दीन जानकी माता॥३१॥</br></br>
        
        राम रसायन तुम्हरे पासा</br>
        सदा रहो रघुपति के दासा॥३२॥</br></br>
        
        तुम्हरे भजन राम को पावै</br>
        जनम जनम के दुख बिसरावै॥३३॥</br></br>
        
        अंतकाल रघुवरपुर जाई</br>
        जहाँ जन्म हरिभक्त कहाई॥३४॥</br></br>
        
        और देवता चित्त ना धरई</br>
        हनुमत सेई सर्व सुख करई॥३५॥</br></br>
        
        संकट कटै मिटै सब पीरा</br>
        जो सुमिरै हनुमत बलबीरा॥३६॥</br></br>
        
        जै जै जै हनुमान गुसाईँ</br>
        कृपा करहु गुरु देव की नाई॥३७॥</br></br>
        
        जो सत बार पाठ कर कोई</br>
        छूटहि बंदि महा सुख होई॥३८॥</br></br>
        
        जो यह पढ़े हनुमान चालीसा</br>
        होय सिद्ध साखी गौरीसा॥३९॥</br></br>
        
        तुलसीदास सदा हरि चेरा</br>
        कीजै नाथ हृदय मह डेरा॥४०॥</br></br></br></br>
        
        दोहा</br></br>
        
        पवन तनय संकट हरन, मंगल मूरति रूप।</br>
        राम लखन सीता सहित, हृदय बसहु सुर भूप॥</br></br>

    `;
        showHanumanChalisa(hindiChalisaContent);
    });





  

    sansButton.addEventListener("click", function () {
        var sanskritChalisaContent = `<h1>Hanuman chalisa in sanskrit</h1>
        हृद्दर्पणं नीरजपादयोश्च गुरोः पवित्रं रजसेति कृत्वा ।</br>
फलप्रदायी यदयं च सर्वं रामस्य पूतञ्च यशो वदामि ॥</br></br></br>

स्मरामि तुभ्यं पवनस्य पुत्रं बलेन रिक्तो मतिहीनदासः ।</br>
दूरीकरोतु सकलञ्च दुःखं विद्यां बलं बुद्धिमपि प्रयच्छ ॥</br></br>

जयतु हनुमद्देवो ज्ञानाब्धिश्च गुणाकरः ।</br>
जयतु वानरेशश्च त्रिषु लोकेषु कीर्तिमान् ॥ १॥</br></br>

दूतः कोशलराजस्य शक्तिमांश्च न तत्समः ।</br>
अञ्जना जननी यस्य देवो वायुः पिता स्वयम् ॥ २॥</br></br>

हे वज्राङ्ग महावीर त्वमेव च सुविक्रमः ।</br>
कुत्सितबुद्धिशत्रुस्त्वं सुबुद्धेः प्रतिपालकः ॥ ३॥</br></br>

काञ्चनवर्णसंयुक्तः वासांसि शोभनानि च ।</br>
कर्णयोः कुण्डले शुभ्रे कुञ्चितानि कचानि च ॥ ४॥</br></br>

वज्रहस्ती महावीरः ध्वजायुक्तो तथैव च ।</br>
स्कन्धे च शोभते यस्य मुञ्जोपवीतशोभनम् ॥ ५॥</br></br>

नेत्रत्रयस्य पुत्रस्त्वं केशरीनन्दनो खलु ।</br>
तेजस्वी त्वं यशस्ते च वन्द्यते पृथिवीतले ॥ ६॥</br></br>

विद्यावांश्च गुणागारः कुशलोऽपि कपीश्वरः ।</br>
रामस्य कार्यसिद्ध्यर्थ मुत्सुको सर्वदैव च ॥ ७॥</br></br>

राघवेन्द्रचरित्रस्य रसज्ञो स प्रतापवान् ।</br>
वसन्ति हृदये तस्य सीता रामश्च लक्ष्मणः ॥ ८॥</br></br>

वैदेहीसम्मुखे तेन प्रदर्शितस्तनुः लघुः ।</br>
लङ्का दग्धा कपीशेन विकटरूपधारिणा ॥ ९॥</br></br>

हताः रूपेण भीमेन सकलाः रजनकचराः ।</br>
कार्याणि कोशलेन्द्रस्य सफलीकृतवान् प्रभुः ॥ १०॥</br></br>

जीवितो लक्ष्मणस्तेन खल्वानीयौषधं तथा ।</br>
रामेण हर्षितो भूत्वा वेष्टितो हृदयेन सः ॥ ११॥</br></br>

प्राशंसत् मनसा रामः कपीशं बलपुङ्गवम् ।</br>
प्रियं समं मदर्थं त्वं कैकेयीनन्दनेन च ॥ १२॥</br></br>

यशो मुखैः सहस्रैश्च गीयते तव वानर ।</br>
हनुमन्तं परिष्वज्य प्रोक्तवान् रघुनन्दनः ॥ १३॥</br></br>

सनकादिसमाः सर्वे देवाः ब्रह्मादयोऽपि च ।</br>
भारतीसहितो शेषो देवर्षिः नारदः खलु ॥ १४॥</br></br>

कुबेरो यमराजश्च दिक्पालाः सकलाः स्वयम् ।</br>
पण्डिताः कवयो सर्वे शक्ताः न कीर्तिमण्डने ॥ १५॥</br></br>

उपकृतश्च सुग्रीवो वायुपुत्रेण धीमता ।</br>
वानराणामधीपोऽभूद् रामस्य कृपया हि सः ॥ १६॥</br></br>

तवैव चोपदेशेन दशवक्त्रसहोदरः ।</br>
प्राप्नोतीति नृपत्वं सः जानाति सकलं जगत् ॥ १७॥</br></br>

योजनानां सहस्राणि दूरे भुवो स्थितो रविः ।</br>
सुमधुरं फलं मत्वा निगीर्णः भवता ननु ॥ १८॥</br></br>

मुद्रिकां कोशलेन्द्रस्य मुखे जग्राह वानरः ।</br>
गतवानब्धिपारं सः नैतद् विस्मयकारकम् ॥ १९॥</br></br>

यानि कानि च विश्वस्य कार्याणि दुष्कराणि हि ।</br>
भवद्कृपाप्रसादेन सुकराणि पुनः खलु ॥ २०॥</br></br>

द्वारे च कोशलेशस्य रक्षको वायुनन्दनः ।</br>
तवानुज्ञां विना कोऽपि न प्रवेशितुमर्हति ॥ २१॥</br></br>

लभन्ते शरणं प्राप्ताः सर्वाण्येव सुखानि च ।</br>
भवति रक्षके लोके भयं मनाग् न जायते ॥ २२॥</br></br>

समर्थो न च संसारे वेगं रोद्धुं बली खलु ।</br>
कम्पन्ते च त्रयो लोकाः गर्जनेन तव प्रभो ॥ २३॥</br></br>

श्रुत्वा नाम महावीरं वायुपुत्रस्य धीमतः ।</br>
भूतादयः पिशाचाश्च पलायन्ते हि दूरतः ॥ २४॥</br></br>

हनुमन्तं कपीशञ्च ध्यायन्ति सततं हि ये ।</br>
नश्यन्ति व्याधयः तेषां रोगाः दूरीभवन्ति च ॥ २५॥</br></br>

मनसा कर्मणा वाचा ध्यायन्ति हि ये जनाः ।</br>
दुःखानि च प्रणश्यन्ति हनुमन्तं पुनः पुनः ॥ २६॥</br></br>

नृपाणाञ्च नृपो रामः तपस्वी रघुनन्दनः ।</br>
तेषामपि च कार्याणि सिद्धानि भवता खलु ॥ २७॥</br></br>

कामान्यन्यानि सर्वाणि कश्चिदपि करोति च ।</br>
प्राप्नोति फलमिष्टं स जीवने नात्र संशयः ॥ २८॥</br></br>

कृतादिषु च सर्वेषु युगेषु स प्रतापवान् ।</br>
यशः कीर्तिश्च सर्वत्र देदीप्यते महीतले ॥ २९॥</br></br>

साधूनां खलु सन्तानां रक्षयिता कपीश्वरः ।</br>
राक्षसकुलसंहर्ता रामस्य प्रिय वानर ॥ ३०॥</br></br>

सिद्धिदो निधिदस्त्वञ्च जनकनन्दिनी स्वयम् ।</br>
दत्तवती वरं तुभ्यं जननी विश्वरूपिणी ॥ ३१॥</br></br>

कराग्रे वायुपुत्रस्य चौषधिः रामरूपिणी ।</br>
रामस्य कोशलेशस्य पादारविन्दवन्दनात् ॥ ३२॥</br></br>

पूजया मारुतपुत्रस्य नरो प्राप्नोति राघवम् ।</br>
जन्मनां कोटिसङ्ख्यानां दूरीभवन्ति पातकाः ॥ ३३॥</br></br>

देहान्ते च पुरं रामं भक्ताः हनुमतो सदा ।</br>
प्राप्य जन्मनि सर्वे हरिभक्ताः पुनः पुनः ॥ ३४॥</br></br>

देवानामपि सर्वेषां संस्मरणं वृथा खलु ।</br>
कपिश्रेष्ठस्य सेवा हि प्रददाति सुखं परम् ॥ ३५॥</br></br>

करोति सङ्कटं दूरं सङ्कटमोचनो कपिः ।</br>
नाशयति च दुःखानि केवलं स्मरणं कपेः ॥ ३६॥</br></br>

जयतु वानरेशश्च जयतु हनुमत्प्रभुः ।</br>
गुरुदेवकृपातुल्यं करोतु मम मङ्गलम् ॥ ३७॥</br></br>

श्रद्धया येन केनापि शतवारञ्च पठ्यते ।</br>
मुच्यते बन्धनाच्छीघ्रं प्राप्नोति परमं सुखम् ॥ ३८॥</br></br>

स्तोत्रं तु रामदूतस्य चत्वारिंशच्च सङ्ख्यकम् ।</br>
पठित्वा सिद्धिमाप्नोति साक्षी कामरिपुः स्वयम् ॥ ३९॥</br></br>

सर्वदा रघुनाथस्य तुलसी सेवकः परम् ।</br>
विज्ञायेति कपिश्रेष्ठ वासं मे हृदये कुरु ॥ ४०॥</br></br>

विघ्नोपनाशी पवनस्य पुत्रः कल्याणकारी हृदये कपीशः ।</br>
सौमित्रिणा राघवसीतया च सार्धं निवासं कुरु रामदूत ॥</br></br>

जय जय श्री हनुमते नमः ॥</br></br>

देवदत्तो गुरुर्यस्य मार्कण्डेयश्च गोत्रकम् ।</br>
अनुवादः कृतस्तेन कृपया पितृपादयोः ॥</br></br>

श्री हनुमानजी सदैव आपका कल्याण करेँ ।</br></br>

इति श्रीरवींद्रकुमार मार्कण्डेय विरचितः हनुमान चालीसा संस्कृतानुवादः सम्पूर्णः ।</br>

    `;
        showHanumanChalisa(sanskritChalisaContent);
    });


    function showHanumanChalisa(content) {
        containerContent.innerHTML = "<p>" + content + "</p>";
        container.classList.remove("hidden-container");
        // You can add additional animations or transitions here
    }
});
