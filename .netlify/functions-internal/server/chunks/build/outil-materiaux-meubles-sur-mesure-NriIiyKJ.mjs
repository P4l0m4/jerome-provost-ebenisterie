import { b as buildAssetsURL } from '../_/nitro.mjs';
import { a as _export_sfc, _ as __nuxt_component_2$1, d as __nuxt_component_3 } from './server.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { jsPDF } from 'jspdf';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/utc.js';

const references = /* @__PURE__ */ JSON.parse(`[{"srcset":"https://cdn.egger.com/img/pim/8854529900574/8854529933342/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Casella blanc","path":"/fr/mobilier-agencement-interieur/decors/H1384_40","overline":"H1384 ST40","color":"#EBDCC8"},{"srcset":"https://cdn.egger.com/img/pim/8854374809630/8854527672350/AR_16_9.webp?width=1440&srcext=png","title":"Ch\xEAne sauvage naturel","path":"/fr/mobilier-agencement-interieur/decors/H1318_10","overline":"H1384 ST40","color":"#B69469"},{"srcset":"https://cdn.egger.com/img/pim/8854529048606/8854529081374/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Casella naturel clair","path":"/fr/mobilier-agencement-interieur/decors/H1367_40","overline":"H1367 ST40","color":"#CBAA88"},{"srcset":"https://cdn.egger.com/img/pim/8854530293790/8854530326558/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Casella naturel","path":"/fr/mobilier-agencement-interieur/decors/H1385_40","overline":"H1385 ST40","color":"#B99972"},{"srcset":"https://cdn.egger.com/img/pim/8854530687006/8854530719774/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Casella marron","path":"/fr/mobilier-agencement-interieur/decors/H1386_40","overline":"H1386 ST40","color":"#71533B"},{"srcset":"https://cdn.egger.com/img/pim/8854529376286/8854529409054/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Casella brun","path":"/fr/mobilier-agencement-interieur/decors/H1369_40","overline":"H1369 ST40","color":"#352C26"},{"srcset":"https://cdn.egger.com/img/pim/8854364979230/8854522626078/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Halifax blanc","path":"/fr/mobilier-agencement-interieur/decors/H1176_37","overline":"H1176 ST37","color":"#D0C0AA"},{"srcset":"https://cdn.egger.com/img/pim/8854365372446/8854523117598/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Halifax naturel","path":"/fr/mobilier-agencement-interieur/decors/H1180_37","overline":"H1180 ST37","color":"#BFA178"},{"srcset":"https://cdn.egger.com/img/pim/8854365765662/8854523215902/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Halifax tabac","path":"/fr/mobilier-agencement-interieur/decors/H1181_37","overline":"H1181 ST37","color":"#8F755B"},{"srcset":"https://cdn.egger.com/img/pim/8855165763614/8855443537950/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Halifax brun","path":"/fr/mobilier-agencement-interieur/decors/H3180_TM37","overline":"H3180 TM37","color":"#7A5E43"},{"srcset":"https://cdn.egger.com/img/pim/8854416195614/8854543237150/AR_16_9.webp?width=384&srcext=png","title":"M\xE9l\xE8ze anthracite","path":"/fr/mobilier-agencement-interieur/decors/H3406_38","overline":"H3406 ST38","color":"#4A433A"},{"srcset":"https://cdn.egger.com/img/pim/8854416588830/8854543335454/AR_16_9.webp?width=384&srcext=png","title":"M\xE9l\xE8ze brun thermo","path":"/fr/mobilier-agencement-interieur/decors/H3408_38","overline":"H3408 ST38","color":"#81624C"},{"srcset":"https://cdn.egger.com/img/pim/8854543532062/8854543564830/AR_16_9.webp?width=384&srcext=png","title":"M\xE9l\xE8ze naturel","path":"/fr/mobilier-agencement-interieur/decors/H3409_38","overline":"H3409 ST38","color":"#EBD2AC"},{"srcset":"https://cdn.egger.com/img/pim/8854368911390/8854526099486/AR_16_9.webp?width=384&srcext=png","title":"Fr\xEAne Navarra sable","path":"/fr/mobilier-agencement-interieur/decors/H1250_36","overline":"H1250 ST36","color":"#D8C3AB"},{"srcset":"https://cdn.egger.com/img/pim/8854378348574/8854529605662/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne d'Orl\xE9ans sable","path":"/fr/mobilier-agencement-interieur/decors/H1377_36","overline":"H1377 ST36","color":"#AC9780"},{"srcset":"https://cdn.egger.com/img/pim/8854379135006/8854529703966/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne d'Orl\xE9ans taupe","path":"/fr/mobilier-agencement-interieur/decors/H1379_36","overline":"H1379 ST36","color":"#6C5F53"},{"srcset":"https://cdn.egger.com/img/pim/8854399287326/8854538125342/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Charleston ch\xE2tain fonc\xE9","path":"/fr/mobilier-agencement-interieur/decors/H3154_36","overline":"H3154 ST36","color":"#634832"},{"srcset":"https://cdn.egger.com/img/pim/8854521741342/8854521774110/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Sacramento marron","path":"/fr/mobilier-agencement-interieur/decors/H1142_36","overline":"H1142 ST36","color":"#CAA67C"},{"srcset":"https://cdn.egger.com/img/pim/8854522134558/8854522167326/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Sacramento gris","path":"/fr/mobilier-agencement-interieur/decors/H1143_36","overline":"H1143 ST36","color":"#A39381"},{"srcset":"https://cdn.egger.com/img/pim/8854542450718/8854542483486/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Davenport naturel clair","path":"/fr/mobilier-agencement-interieur/decors/H3359_32","overline":"H3359 ST32","color":"#C6A581"},{"srcset":"https://cdn.egger.com/img/pim/8854376775710/8854527868958/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Sherman cognac","path":"/fr/mobilier-agencement-interieur/decors/H1344_32","overline":"H1344 ST32","color":"#A47D4C"},{"srcset":"https://cdn.egger.com/img/pim/8854377562142/8854528065566/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Sherman anthracite","path":"/fr/mobilier-agencement-interieur/decors/H1346_32","overline":"H1346 ST32","color":"#52514B"},{"srcset":"https://cdn.egger.com/img/pim/8854541271070/8855167500318/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Cuneo brun","path":"/fr/mobilier-agencement-interieur/decors/H3317_28","overline":"H3317 ST28","color":"#AD8867"},{"srcset":"https://cdn.egger.com/img/pim/8854409117726/8854540484638/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Gladstone sable","path":"/fr/mobilier-agencement-interieur/decors/H3309_28","overline":"H3309 ST28","color":"#C5A280"},{"srcset":"https://cdn.egger.com/img/pim/8854409510942/8854541565982/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Gladstone tabac","path":"/fr/mobilier-agencement-interieur/decors/H3325_28","overline":"H3325 ST28","color":"#473F3A"},{"srcset":"https://cdn.egger.com/img/pim/8855168417822/8855443931166/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Gladstone lave","path":"/fr/mobilier-agencement-interieur/decors/H3342_TM28","overline":"H3342 TM28","color":"#2B2720"},{"srcset":"https://cdn.egger.com/img/pim/8855161864222/8855443341342/AR_16_9.webp?width=384&srcext=png","title":"Eucalyptus naturel","path":"/fr/mobilier-agencement-interieur/decors/H3041_TM12","overline":"H3041 TM12","color":"#544032"},{"srcset":"https://cdn.egger.com/img/pim/8855158521886/8855443243038/AR_16_9.webp?width=384&srcext=png","title":"Fr\xEAne Abano anthracite","path":"/fr/mobilier-agencement-interieur/decors/H1228_TM12","overline":"H1228 TM12","color":"#2A2526"},{"srcset":"https://cdn.egger.com/img/pim/8854366158878/8854523314206/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne thermo noir","path":"/fr/mobilier-agencement-interieur/decors/H1199_12","overline":"H1199 ST12","color":"#2E211B"},{"srcset":"https://cdn.egger.com/img/pim/8854524428318/8854524461086/AR_16_9.webp?width=384&srcext=png","title":"Fr\xEAne Seville","path":"/fr/mobilier-agencement-interieur/decors/H1223_19","overline":"H1223 ST19","color":"#F1E4D2"},{"srcset":"https://cdn.egger.com/img/pim/8854525018142/8854525050910/AR_16_9.webp?width=384&srcext=png","title":"Fr\xEAne Trondheim","path":"/fr/mobilier-agencement-interieur/decors/H1225_12","overline":"H1225 ST12","color":"#F1EDEA"},{"srcset":"https://cdn.egger.com/img/pim/8854657531934/8854657564702/AR_16_9.webp?width=384&srcext=png","title":"Acacia Sheffield naturel","path":"/fr/mobilier-agencement-interieur/decors/H1242_10","overline":"H1242 ST10","color":"#C9A680"},{"srcset":"https://cdn.egger.com/img/pim/8854371663902/8854526296094/AR_16_9.webp?width=384&srcext=png","title":"Acacia de Lakeland cr\xE8me","path":"/fr/mobilier-agencement-interieur/decors/H1277_9","overline":"H1277 ST9","color":"#E6CFBB"},{"srcset":"https://cdn.egger.com/img/pim/8854527180830/8854527213598/AR_16_9.webp?width=384&srcext=png","title":"Noyer Warmia brun","path":"/fr/mobilier-agencement-interieur/decors/H1307_19","overline":"H1307 ST19","color":"#69452B"},{"srcset":"https://cdn.egger.com/img/pim/8854374416414/8854527574046/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Whiteriver c\xE9rus\xE9 gris","path":"/fr/mobilier-agencement-interieur/decors/H1313_10","overline":"H1313 ST10","color":"#877A73"},{"srcset":"https://cdn.egger.com/img/pim/8854374023198/8854527475742/AR_16_9.webp?width=1440&srcext=png","title":"Ch\xEAne Whiteriver c\xE9rus\xE9 sable","path":"/fr/mobilier-agencement-interieur/decors/H1312_10","overline":"H1312 ST10","color":"#D0C0A9"},{"srcset":"https://cdn.egger.com/img/pim/8854528655390/8854528688158/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Baronia clair","path":"/fr/mobilier-agencement-interieur/decors/H1362_12","overline":"H1362 ST12","color":"#CDB39A"},{"srcset":"https://cdn.egger.com/img/pim/8854384246814/8854531276830/AR_16_9.webp?width=384&srcext=png","title":"Cerisier Locarno","path":"/fr/mobilier-agencement-interieur/decors/H1636_12","overline":"H1636 ST12","color":"#AE7647"},{"srcset":"https://cdn.egger.com/img/pim/8854386606110/8854531768350/AR_16_9.webp?width=384&srcext=png","title":"Noyer Lincoln","path":"/fr/mobilier-agencement-interieur/decors/H1714_19","overline":"H1714 ST19","color":"#5F3D24"},{"srcset":"https://cdn.egger.com/img/pim/8854397321246/8854536945694/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Davos chamois","path":"/fr/mobilier-agencement-interieur/decors/H3133_12","overline":"H3133 ST12","color":"#836B55"},{"srcset":"https://cdn.egger.com/img/pim/8854398107678/8854537142302/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Lorenzo sable","path":"/fr/mobilier-agencement-interieur/decors/H3146_19","overline":"H3146 ST19","color":"#A89780"},{"srcset":"https://cdn.egger.com/img/pim/8854399680542/8854538223646/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Corbridge gris","path":"/fr/mobilier-agencement-interieur/decors/H3156_12","overline":"H3156 ST12","color":"#A89780"},{"srcset":"https://cdn.egger.com/img/pim/8854413836318/8854542843934/AR_16_9.webp?width=1440&srcext=png","title":"Ch\xEAne Corbridge naturel","path":"/fr/mobilier-agencement-interieur/decors/H3395_12","overline":"H3395 ST12","color":"#C49A65"},{"srcset":"https://cdn.egger.com/img/pim/8854400466974/8854538420254/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Vicenza","path":"/fr/mobilier-agencement-interieur/decors/H3157_12","overline":"H3157 ST12","color":"#C1A37C"},{"srcset":"https://cdn.egger.com/img/pim/8854401253406/8854538616862/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Vicenza gris","path":"/fr/mobilier-agencement-interieur/decors/H3158_19","overline":"H3158 ST19","color":"#938372"},{"srcset":"https://cdn.egger.com/img/pim/8854538911774/8854538944542/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Vicenza clair","path":"/fr/mobilier-agencement-interieur/decors/H3165_12","overline":"H3165 ST12","color":"#D9C2A8"},{"srcset":"https://cdn.egger.com/img/pim/8854411477022/8854541860894/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Nebraska gris","path":"/fr/mobilier-agencement-interieur/decors/H3332_10","overline":"H3332 ST10","color":"#D9C2A8"},{"srcset":"https://cdn.egger.com/img/pim/8854413443102/8854542745630/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne de Lancaster naturel","path":"/fr/mobilier-agencement-interieur/decors/H3368_9","overline":"H3368 ST9","color":"#C39763"},{"srcset":"https://cdn.egger.com/img/pim/8854414622750/8854543040542/AR_16_9.webp?width=384&srcext=png","title":"Ch\xEAne Kendal cognac","path":"/fr/mobilier-agencement-interieur/decors/H3398_12","overline":"H3398 ST12","color":"#956C43"},{"srcset":"https://cdn.egger.com/img/pim/8854392111134/8854534422558/AR_16_9.webp?width=1440&srcext=png","title":"Ch\xEAne de Hunton fonc\xE9","path":"/fr/mobilier-agencement-interieur/decors/H2033_10","overline":"H2033 ST10","color":"#956C43"},{"srcset":"https://cdn.egger.com/img/pim/8854419341342/8854544908318/AR_16_9.webp?width=384&srcext=png","title":"Noyer du Pacifique naturel","path":"/fr/mobilier-agencement-interieur/decors/H3700_10","overline":"H3700 ST10","color":"#9F805F"},{"srcset":"https://cdn.egger.com/img/pim/8854419734558/8854545006622/AR_16_9.webp?width=384&srcext=png","title":"Noyer du Pacifique tabac","path":"/fr/mobilier-agencement-interieur/decors/H3702_10","overline":"H3702 ST10","color":"#685241"},{"srcset":"https://cdn.egger.com/img/pim/8854420127774/8854545104926/AR_16_9.webp?width=384&srcext=png","title":"Noyer Carini naturel","path":"/fr/mobilier-agencement-interieur/decors/H3710_12","overline":"H3710 ST12","color":"#83684F"},{"srcset":"https://cdn.egger.com/img/pim/8854392504350/8854535307294/AR_16_9.webp?width=1440&srcext=png","title":"Coco bolo","path":"/fr/mobilier-agencement-interieur/decors/H3012_22","overline":"H3012 ST22","color":"#CCAA7D"},{"srcset":"https://cdn.egger.com/img/pim/8854420914206/8854545301534/AR_16_9.webp?width=1440&srcext=png","title":"Hickory naturel","path":"/fr/mobilier-agencement-interieur/decors/H3730_10","overline":"H3730 ST10","color":"#CAA36F"},{"srcset":"https://cdn.egger.com/img/pim/8854478389278/8855434395678/AR_16_9.webp?width=384&srcext=png","title":"Blanc premium","path":"/fr/mobilier-agencement-interieur/decors/W1000_9","overline":"W1000 ST9","color":"#FCFDF3"},{"srcset":"https://cdn.egger.com/img/pim/8854481797150/8855434690590/AR_16_9.webp?width=384&srcext=png","title":"Blanc alpin","path":"/fr/mobilier-agencement-interieur/decors/W1100_9","overline":"W1100 ST9","color":"#FFFEFA"},{"srcset":"https://cdn.egger.com/img/pim/8854417375262/8854543925278/AR_16_9.webp?width=1440&srcext=png","title":"Pin Alland polaire","path":"/fr/mobilier-agencement-interieur/decors/H3433_22","overline":"H3433 ST22","color":"#DBCFBA"},{"srcset":"https://cdn.egger.com/img/pim/8854484942878/8855434952734/AR_16_9.webp?width=384&srcext=png","title":"Blanc porcelaine","path":"/fr/mobilier-agencement-interieur/decors/W1200_9","overline":"W1200 ST9","color":"#F8F4E5"},{"srcset":"https://cdn.egger.com/img/pim/8854566109214/8855317577758/AR_16_9.webp?width=384&srcext=png","title":"Blanc classique","path":"/fr/mobilier-agencement-interieur/decors/W960_SM","overline":"W960 SM","color":"#F6F7EF"},{"srcset":"https://cdn.egger.com/img/pim/8854335291422/8854514728990/AR_16_9.webp?width=1440&srcext=png","title":"Lin blanc","path":"/fr/mobilier-agencement-interieur/decors/F422_10","overline":"F422 ST10","color":"#F6F7EF"},{"srcset":"https://cdn.egger.com/img/pim/8854489268254/8855435313182/AR_16_9.webp?width=384&srcext=png","title":"Blanc kaolin","path":"/fr/mobilier-agencement-interieur/decors/W980_SM","overline":"W980 SM","color":"#FEFBEE"},{"srcset":"https://cdn.egger.com/img/pim/8854566567966/8855317643294/AR_16_9.webp?width=384&srcext=png","title":"Blanc cristal","path":"/fr/mobilier-agencement-interieur/decors/W990_7","overline":"W990 ST7","color":"#FCF6E6"},{"srcset":"https://cdn.egger.com/img/pim/8854425632798/8855430004766/AR_16_9.webp?width=384&srcext=png","title":"Beige sable","path":"/fr/mobilier-agencement-interieur/decors/U113_9","overline":"U113 ST9","color":"#FFEFD5"},{"srcset":"https://cdn.egger.com/img/pim/8854426026014/8855430037534/AR_16_9.webp?width=384&srcext=png","title":"Jaune tournesol","path":"/fr/mobilier-agencement-interieur/decors/U114_9","overline":"U114 ST9","color":"#FCBF12"},{"srcset":"https://cdn.egger.com/img/pim/8854546874398/8855313711134/AR_16_9.webp?width=384&srcext=png","title":"Beige carat","path":"/fr/mobilier-agencement-interieur/decors/U115_9","overline":"U115 ST9","color":"#F1E3CA"},{"srcset":"https://cdn.egger.com/img/pim/8854547202078/8855313743902/AR_16_9.webp?width=384&srcext=png","title":"Jaune sable","path":"/fr/mobilier-agencement-interieur/decors/U125_9","overline":"U125 ST9","color":"#E7C193"},{"srcset":"https://cdn.egger.com/img/pim/8854426419230/8855430070302/AR_16_9.webp?width=384&srcext=png","title":"Jaune citron","path":"/fr/mobilier-agencement-interieur/decors/U131_9","overline":"U131 ST9","color":"#FBE64E"},{"srcset":"https://cdn.egger.com/img/pim/8854427598878/8855430168606/AR_16_9.webp?width=384&srcext=png","title":"Beige ros\xE9","path":"/fr/mobilier-agencement-interieur/decors/U156_9","overline":"U156 ST9","color":"#E7D6C0"},{"srcset":"https://cdn.egger.com/img/pim/8854427992094/8855430201374/AR_16_9.webp?width=384&srcext=png","title":"Jaune curry","path":"/fr/mobilier-agencement-interieur/decors/U163_9","overline":"U163 ST9","color":"#E3B142"},{"srcset":"https://cdn.egger.com/img/pim/8854429171742/8855430299678/AR_16_9.webp?width=384&srcext=png","title":"Gris galet","path":"/fr/mobilier-agencement-interieur/decors/U201_9","overline":"U201 ST9","color":"#B3AC9E"},{"srcset":"https://cdn.egger.com/img/pim/8854547824670/8855313874974/AR_16_9.webp?width=384&srcext=png","title":"Gris galet","path":"/fr/mobilier-agencement-interieur/decors/U201_PM","overline":"U201 PM","color":"#B3AC9E"},{"srcset":"https://cdn.egger.com/img/pim/8854548086814/8855313907742/AR_16_9.webp?width=384&srcext=png","title":"Beige amande","path":"/fr/mobilier-agencement-interieur/decors/U211_9","overline":"U211 ST9","color":"#B39E91"},{"srcset":"https://cdn.egger.com/img/pim/8854429564958/8855430332446/AR_16_9.webp?width=384&srcext=png","title":"Blanc cass\xE9","path":"/fr/mobilier-agencement-interieur/decors/U216_9","overline":"U216 ST9","color":"#FDF2E3"},{"srcset":"https://cdn.egger.com/img/pim/8854429958174/8855430365214/AR_16_9.webp?width=384&srcext=png","title":"Blanc \xE9cru","path":"/fr/mobilier-agencement-interieur/decors/U222_9","overline":"U222 ST9","color":"#FFF5DF"},{"srcset":"https://cdn.egger.com/img/pim/8854430351390/8855430397982/AR_16_9.webp?width=384&srcext=png","title":"Nude abricot","path":"/fr/mobilier-agencement-interieur/decors/U232_9","overline":"U232 ST9","color":"#C79A87"},{"srcset":"https://cdn.egger.com/img/pim/8854430744606/8855430430750/AR_16_9.webp?width=384&srcext=png","title":"Rouge bordeaux","path":"/fr/mobilier-agencement-interieur/decors/U311_9","overline":"U311 ST9","color":"#6D0E15"},{"srcset":"https://cdn.egger.com/img/pim/8854431531038/8855430496286/AR_16_9.webp?width=384&srcext=png","title":"Rouge","path":"/fr/mobilier-agencement-interieur/decors/U321_9","overline":"U321 ST9","color":"#C72A22"},{"srcset":"https://cdn.egger.com/img/pim/8854431924254/8855430529054/AR_16_9.webp?width=384&srcext=png","title":"Rouge cerise","path":"/fr/mobilier-agencement-interieur/decors/U323_9","overline":"U323 ST9","color":"#9C1120"},{"srcset":"https://cdn.egger.com/img/pim/8854434283550/8855430725662/AR_16_9.webp?width=384&srcext=png","title":"Orange","path":"/fr/mobilier-agencement-interieur/decors/U332_9","overline":"U332 ST9","color":"#F5882D"},{"title":"Rouge oxyde","path":"/fr/mobilier-agencement-interieur/decors/U335_9","overline":"U335 ST9","color":"#85544C"},{"srcset":"https://cdn.egger.com/img/pim/8854435463198/8855430823966/AR_16_9.webp?width=384&srcext=png","title":"Orange de Sienne","path":"/fr/mobilier-agencement-interieur/decors/U350_9","overline":"U350 ST9","color":"#D36F00"},{"srcset":"https://cdn.egger.com/img/pim/8854435856414/8855430856734/AR_16_9.webp?width=384&srcext=png","title":"Rose flamingo","path":"/fr/mobilier-agencement-interieur/decors/U363_9","overline":"U363 ST9","color":"#FFA9AF"},{"srcset":"https://cdn.egger.com/img/pim/8854436642846/8855430922270/AR_16_9.webp?width=384&srcext=png","title":"Rouge grenat","path":"/fr/mobilier-agencement-interieur/decors/U399_9","overline":"U399 ST9","color":"#581E22"},{"srcset":"https://cdn.egger.com/img/pim/8854438215710/8855431053342/AR_16_9.webp?width=384&srcext=png","title":"Lilas","path":"/fr/mobilier-agencement-interieur/decors/U420_9","overline":"U420 ST9","color":"#957F96"},{"srcset":"https://cdn.egger.com/img/pim/8854438608926/8855431086110/AR_16_9.webp?width=384&srcext=png","title":"Violet","path":"/fr/mobilier-agencement-interieur/decors/U430_9","overline":"U430 ST9","color":"#635B82"},{"srcset":"https://cdn.egger.com/img/pim/8854439002142/8855431118878/AR_16_9.webp?width=384&srcext=png","title":"Bleu glacier","path":"/fr/mobilier-agencement-interieur/decors/U500_9","overline":"U500 ST9","color":"#B6E1E0"},{"srcset":"https://cdn.egger.com/img/pim/8854550511646/8855314464798/AR_16_9.webp?width=384&srcext=png","title":"Bleu brume","path":"/fr/mobilier-agencement-interieur/decors/U502_9","overline":"U502 ST9","color":"#536C7F"},{"srcset":"https://cdn.egger.com/img/pim/8854439395358/8855431151646/AR_16_9.webp?width=384&srcext=png","title":"Bleu cosmique","path":"/fr/mobilier-agencement-interieur/decors/U504_9","overline":"U504 ST9","color":"#364F69"},{"srcset":"https://cdn.egger.com/img/pim/8854550937630/8855314530334/AR_16_9.webp?width=384&srcext=png","title":"Bleu nordique","path":"/fr/mobilier-agencement-interieur/decors/U505_9","overline":"U505 ST9","color":"#6B9EB8"},{"srcset":"https://cdn.egger.com/img/pim/8854440575006/8855431249950/AR_16_9.webp?width=384&srcext=png","title":"Bleu horizon","path":"/fr/mobilier-agencement-interieur/decors/U522_9","overline":"U522 ST9","color":"#ADC8EA"},{"srcset":"https://cdn.egger.com/img/pim/8854440968222/8855431282718/AR_16_9.webp?width=384&srcext=png","title":"Bleu de Delft","path":"/fr/mobilier-agencement-interieur/decors/U525_9","overline":"U525 ST9","color":"#0065AE"},{"srcset":"https://cdn.egger.com/img/pim/8854441754654/8855431348254/AR_16_9.webp?width=384&srcext=png","title":"Bleu denim","path":"/fr/mobilier-agencement-interieur/decors/U540_9","overline":"U540 ST9","color":"#93A3B0"},{"srcset":"https://cdn.egger.com/img/pim/8854551625758/8855314661406/AR_16_9.webp?width=384&srcext=png","title":"Bleu baltique","path":"/fr/mobilier-agencement-interieur/decors/U545_9","overline":"U545 ST9","color":"#445665"},{"srcset":"https://cdn.egger.com/img/pim/8854442147870/8855431381022/AR_16_9.webp?width=384&srcext=png","title":"Bleu outremer","path":"/fr/mobilier-agencement-interieur/decors/U560_9","overline":"U560 ST9","color":"#1C3676"},{"srcset":"https://cdn.egger.com/img/pim/8854552117278/8855314726942/AR_16_9.webp?width=384&srcext=png","title":"Bleu oc\xE9an","path":"/fr/mobilier-agencement-interieur/decors/U565_9","overline":"U565 ST9","color":"#274B5B"},{"srcset":"https://cdn.egger.com/img/pim/8854442541086/8855431413790/AR_16_9.webp?width=384&srcext=png","title":"Bleu nuit","path":"/fr/mobilier-agencement-interieur/decors/U570_9","overline":"U570 ST9","color":"#222B56"},{"srcset":"https://cdn.egger.com/img/pim/8854552608798/8855314792478/AR_16_9.webp?width=384&srcext=png","title":"Bleu profond","path":"/fr/mobilier-agencement-interieur/decors/U575_9","overline":"U575 ST9","color":"#162640"},{"srcset":"https://cdn.egger.com/img/pim/8854442934302/8855431446558/AR_16_9.webp?width=384&srcext=png","title":"Bleu indigo","path":"/fr/mobilier-agencement-interieur/decors/U599_9","overline":"U599 ST9","color":"#232832"},{"srcset":"https://cdn.egger.com/img/pim/8854553296926/8855314923550/AR_16_9.webp?width=384&srcext=png","title":"Vert eucalyptus","path":"/fr/mobilier-agencement-interieur/decors/U604_9","overline":"U604 ST9","color":"#6F7A6E"},{"srcset":"https://cdn.egger.com/img/pim/8854444507166/8855431577630/AR_16_9.webp?width=384&srcext=png","title":"Vert sapin","path":"/fr/mobilier-agencement-interieur/decors/U606_9","overline":"U606 ST9","color":"#183B2B"},{"srcset":"https://cdn.egger.com/img/pim/8854444900382/8855431610398/AR_16_9.webp?width=384&srcext=png","title":"Vert opale","path":"/fr/mobilier-agencement-interieur/decors/U608_9","overline":"U608 ST9","color":"#C9D3C0"},{"srcset":"https://cdn.egger.com/img/pim/8854445686814/8855431675934/AR_16_9.webp?width=384&srcext=png","title":"Vert kiwi","path":"/fr/mobilier-agencement-interieur/decors/U626_9","overline":"U626 ST9","color":"#849A4E"},{"srcset":"https://cdn.egger.com/img/pim/8854446080030/8855431708702/AR_16_9.webp?width=384&srcext=png","title":"Vert pomme","path":"/fr/mobilier-agencement-interieur/decors/U630_9","overline":"U630 ST9","color":"#BCDF4D"},{"srcset":"https://cdn.egger.com/img/pim/8854446473246/8855431741470/AR_16_9.webp?width=384&srcext=png","title":"Bleu turquoise","path":"/fr/mobilier-agencement-interieur/decors/U633_9","overline":"U633 ST9","color":"#008E9E"},{"srcset":"https://cdn.egger.com/img/pim/8854446866462/8855431774238/AR_16_9.webp?width=384&srcext=png","title":"Vert fjord","path":"/fr/mobilier-agencement-interieur/decors/U636_9","overline":"U636 ST9","color":"#8E9C99"},{"srcset":"https://cdn.egger.com/img/pim/8854554148894/8855315152926/AR_16_9.webp?width=384&srcext=png","title":"Vert sauge","path":"/fr/mobilier-agencement-interieur/decors/U638_9","overline":"U638 ST9","color":"#C1BBA4"},{"srcset":"https://cdn.egger.com/img/pim/8854554476574/8855315185694/AR_16_9.webp?width=384&srcext=png","title":"Vert olive","path":"/fr/mobilier-agencement-interieur/decors/U640_9","overline":"U640 ST9","color":"#97946C"},{"srcset":"https://cdn.egger.com/img/pim/8854554869790/8855315218462/AR_16_9.webp?width=384&srcext=png","title":"Vert agave","path":"/fr/mobilier-agencement-interieur/decors/U645_9","overline":"U645 ST9","color":"#64614B"},{"srcset":"https://cdn.egger.com/img/pim/8854447259678/8855431807006/AR_16_9.webp?width=384&srcext=png","title":"Vert Niagara","path":"/fr/mobilier-agencement-interieur/decors/U646_9","overline":"U646 ST9","color":"#477880"},{"srcset":"https://cdn.egger.com/img/pim/8854555361310/8855315283998/AR_16_9.webp?width=384&srcext=png","title":"Vert min\xE9ral","path":"/fr/mobilier-agencement-interieur/decors/U665_9","overline":"U665 ST9","color":"#4C5D59"},{"srcset":"https://cdn.egger.com/img/pim/8854556082206/8855673274398/AR_16_9.webp?width=384&srcext=png","title":"Vert fonc\xE9","path":"/fr/mobilier-agencement-interieur/decors/U699_9","overline":"U699 ST9","color":"#192F26"},{"srcset":"https://cdn.egger.com/img/pim/8854449225758/8855431970846/AR_16_9.webp?width=384&srcext=png","title":"Gris cachemire","path":"/fr/mobilier-agencement-interieur/decors/U702_9","overline":"U702 ST9","color":"#D8CABD"},{"srcset":"https://cdn.egger.com/img/pim/8854451978270/8855432200222/AR_16_9.webp?width=384&srcext=png","title":"Soie grise","path":"/fr/mobilier-agencement-interieur/decors/U707_9","overline":"U707 ST9","color":"#E5E1DE"},{"srcset":"https://cdn.egger.com/img/pim/8854452371486/8855432232990/AR_16_9.webp?width=384&srcext=png","title":"Gris clair","path":"/fr/mobilier-agencement-interieur/decors/U708_9","overline":"U708 ST9","color":"#D1CEC6"},{"srcset":"https://cdn.egger.com/img/pim/8854459449374/8855432822814/AR_16_9.webp?width=384&srcext=png","title":"Gris argile fonc\xE9","path":"/fr/mobilier-agencement-interieur/decors/U740_9","overline":"U740 ST9","color":"#898073"},{"srcset":"https://cdn.egger.com/img/pim/8854459842590/8855432855582/AR_16_9.webp?width=384&srcext=png","title":"Brun taupe","path":"/fr/mobilier-agencement-interieur/decors/U741_9","overline":"U741 ST9","color":"#545048"},{"srcset":"https://cdn.egger.com/img/pim/8854460235806/8855432888350/AR_16_9.webp?width=384&srcext=png","title":"Brun s\xE9pia","path":"/fr/mobilier-agencement-interieur/decors/U748_9","overline":"U748 ST9","color":"#60544A"},{"srcset":"https://cdn.egger.com/img/pim/8854460629022/8855432921118/AR_16_9.webp?width=384&srcext=png","title":"Gris souris","path":"/fr/mobilier-agencement-interieur/decors/U750_9","overline":"U750 ST9","color":"#D1C9B9"},{"srcset":"https://cdn.egger.com/img/pim/8854461415454/8855432986654/AR_16_9.webp?width=384&srcext=png","title":"Gris perle","path":"/fr/mobilier-agencement-interieur/decors/U763_9","overline":"U763 ST9","color":"#C2BFB9"},{"srcset":"https://cdn.egger.com/img/pim/8854462201886/8855433052190/AR_16_9.webp?width=384&srcext=png","title":"Gris cubanite","path":"/fr/mobilier-agencement-interieur/decors/U767_9","overline":"U767 ST9","color":"#82796E"},{"srcset":"https://cdn.egger.com/img/pim/8854336471070/8854515023902/AR_16_9.webp?width=1440&srcext=png","title":"Acier bross\xE9 cubanite","path":"https://www.egger.com/fr/mobilier-agencement-interieur/decors/F434_20","overline":"F434 ST20","color":"#5C514C"},{"srcset":"https://cdn.egger.com/img/pim/8854462595102/8855433084958/AR_16_9.webp?width=384&srcext=png","title":"Gris brume","path":"/fr/mobilier-agencement-interieur/decors/U775_9","overline":"U775 ST9","color":"#E7E5DA"},{"srcset":"https://cdn.egger.com/img/pim/8854463840286/8855433183262/AR_16_9.webp?width=384&srcext=png","title":"Gris c\xE9ladon","path":"/fr/mobilier-agencement-interieur/decors/U780_9","overline":"U780 ST9","color":"#70797D"},{"srcset":"https://cdn.egger.com/img/pim/8854464233502/8855433216030/AR_16_9.webp?width=384&srcext=png","title":"Gris arctique","path":"/fr/mobilier-agencement-interieur/decors/U788_9","overline":"U788 ST9","color":"#959090"},{"srcset":"https://cdn.egger.com/img/pim/8854465413150/8855433314334/AR_16_9.webp?width=384&srcext=png","title":"Marron fonc\xE9","path":"/fr/mobilier-agencement-interieur/decors/U818_9","overline":"U818 ST9","color":"#4B3226"},{"srcset":"https://cdn.egger.com/img/pim/8854465806366/8855433347102/AR_16_9.webp?width=384&srcext=png","title":"Nude terracotta","path":"/fr/mobilier-agencement-interieur/decors/U830_9","overline":"U830 ST9","color":"#C3835B"},{"srcset":"https://cdn.egger.com/img/pim/8854502146078/8854502178846/AR_16_9.webp?width=1440&srcext=png","title":"Terrazzo Pelago","path":"/fr/mobilier-agencement-interieur/decors/F004_75","overline":"F004 ST75","color":"#FAF5EE"},{"srcset":"https://cdn.egger.com/img/pim/8854349381662/8854520070174/AR_16_9.webp?width=1440&srcext=png","title":"Marbre Levanto blanc","path":"/fr/mobilier-agencement-interieur/decors/F812_9","overline":"F812 ST9","color":"#EAE9E3"},{"srcset":"https://cdn.egger.com/img/pim/8854466199582/8855433379870/AR_16_9.webp?width=384&srcext=png","title":"Soft Black","path":"/fr/mobilier-agencement-interieur/decors/U899_9","overline":"U899 ST9","color":"#312F2E"},{"srcset":"https://cdn.egger.com/img/pim/8854466986014/8855433445406/AR_16_9.webp?width=384&srcext=png","title":"Gris onyx","path":"/fr/mobilier-agencement-interieur/decors/U960_9","overline":"U960 ST9","color":"#626262"},{"srcset":"https://cdn.egger.com/img/pim/8854560866334/8855316529182/AR_16_9.webp?width=384&srcext=png","title":"Gris graphite","path":"/fr/mobilier-agencement-interieur/decors/U961_7","overline":"U961 ST7","color":"#363231"},{"srcset":"https://cdn.egger.com/img/pim/8854470131742/8855433707550/AR_16_9.webp?width=384&srcext=png","title":"Gris ombre","path":"/fr/mobilier-agencement-interieur/decors/U963_9","overline":"U963 ST9","color":"#414141"},{"srcset":"https://cdn.egger.com/img/pim/8854470918174/8855673438238/AR_16_9.webp?width=384&srcext=png ","title":"Gris carbone","path":"/fr/mobilier-agencement-interieur/decors/U968_9","overline":"U968 ST9","color":"#2D2F33"},{"srcset":"https://cdn.egger.com/img/pim/8854471311390/8855433805854/AR_16_9.webp?width=384&srcext=png","title":"Brun noir","path":"/fr/mobilier-agencement-interieur/decors/U989_9","overline":"U989 ST9","color":"#2E201E"},{"srcset":"https://cdn.egger.com/img/pim/8854562865182/8855316922398/AR_16_9.webp?width=384&srcext=png","title":"Noir","path":"/fr/mobilier-agencement-interieur/decors/U999_7","overline":"U999 ST7","color":"#020408"}]`);
const logo = "" + buildAssetsURL("logojpg.Er3MAYMY.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "outil-materiaux-meubles-sur-mesure",
  __ssrInlineRender: true,
  setup(__props) {
    const file = ref(null);
    const imageUrl = computed(
      () => file.value ? (void 0).URL.createObjectURL(file.value) : ""
    );
    const colors = ref([]);
    const selectedReferences = computed(() => {
      if (!colors.value.length) return [];
      const refsWithDistance = colors.value.map((extractedColor) => {
        return references.map((ref2) => {
          if (!ref2.color) return { reference: ref2, distance: Infinity };
          const distance = getColorDistance(extractedColor, ref2.color);
          return { reference: ref2, distance };
        }).sort((a, b) => a.distance - b.distance)[0];
      });
      return refsWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5).map((item) => item.reference);
    });
    const selectedReferencesWithoutDuplicates = computed(() => {
      const seen = /* @__PURE__ */ new Set();
      return selectedReferences.value.filter((ref2) => {
        if (seen.has(ref2.path)) {
          return false;
        }
        seen.add(ref2.path);
        return true;
      });
    });
    function getColorDistance(color1, color2) {
      if (!(color1 == null ? void 0 : color1.match(/^#[0-9A-F]{6}$/i)) || !(color2 == null ? void 0 : color2.match(/^#[0-9A-F]{6}$/i))) {
        return Infinity;
      }
      const rgb1 = {
        r: parseInt(color1.slice(1, 3), 16),
        g: parseInt(color1.slice(3, 5), 16),
        b: parseInt(color1.slice(5, 7), 16)
      };
      const rgb2 = {
        r: parseInt(color2.slice(1, 3), 16),
        g: parseInt(color2.slice(3, 5), 16),
        b: parseInt(color2.slice(5, 7), 16)
      };
      return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) + Math.pow(rgb1.g - rgb2.g, 2) + Math.pow(rgb1.b - rgb2.b, 2)
      );
    }
    async function extractColors() {
      if (!file.value) return;
      const img = new Image();
      img.src = imageUrl.value;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      const canvas = (void 0).createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colorCounts = {};
      const colorBins = {};
      const binSize = 30;
      for (let i = 0; i < imageData.length; i += 16) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        const binKey = [
          Math.floor(r / binSize) * binSize,
          Math.floor(g / binSize) * binSize,
          Math.floor(b / binSize) * binSize
        ].join(",");
        if (!colorBins[binKey]) {
          colorBins[binKey] = [];
        }
        colorBins[binKey].push(hex);
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }
      const diverseColors = Object.values(colorBins).map((binColors) => {
        return binColors.reduce((mostFrequent, color) => {
          return colorCounts[color] > colorCounts[mostFrequent] ? color : mostFrequent;
        }, binColors[0]);
      });
      colors.value = diverseColors.sort((a, b) => colorCounts[b] - colorCounts[a]).slice(0, 6);
    }
    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return [r, g, b];
    }
    async function downloadResult() {
      var _a;
      if (!file.value || colors.value.length === 0) return;
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const logoImg = new Image();
      logoImg.src = logo;
      await new Promise((resolve) => {
        logoImg.onload = resolve;
      });
      const canvas = (void 0).createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = logoImg.width;
      canvas.height = logoImg.height;
      ctx.drawImage(logoImg, 0, 0);
      const logoBase64 = canvas.toDataURL("image/jpeg");
      const logoWidth = 12;
      const logoHeight = 12;
      const logoX = margin;
      const logoY = margin;
      doc.addImage(logoBase64, "JPEG", logoX, logoY, logoWidth, logoHeight);
      doc.setFontSize(16);
      doc.text("JP Eb\xE9nisterie", logoX + logoWidth + 5, logoY + logoHeight / 1.6);
      const imgData = imageUrl.value;
      const img = new Image();
      img.src = imgData;
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      let imgWidth = (pageWidth - margin * 3) / 2;
      let imgHeight = imgWidth * img.height / img.width;
      if (imgHeight > 400) {
        imgHeight = 400;
        imgWidth = imgHeight * img.width / img.height;
      }
      const imageFormat = ((_a = file.value) == null ? void 0 : _a.type.split("/")[1].toUpperCase()) || "JPEG";
      doc.addImage(imgData, imageFormat, margin, margin + 20, imgWidth, imgHeight);
      doc.setFontSize(12);
      colors.value.forEach((color, index) => {
        const x = margin * 2 + imgWidth;
        const y = margin + index * 20;
        doc.setFillColor(...hexToRgb(color));
        doc.rect(x, y, 20, 15, "F");
        doc.text(color, x + 25, y + 10);
      });
      if (selectedReferencesWithoutDuplicates.value.length > 0) {
        const refsY = margin + imgHeight + 30;
        selectedReferencesWithoutDuplicates.value.forEach(async (ref2, index) => {
          doc.setFontSize(12);
          const textY = refsY + 10 + index * 25;
          doc.setFillColor(...hexToRgb(ref2.color));
          doc.rect(margin, textY - 4, 10, 15, "F");
          doc.text(`${ref2.title}`, margin + 15, textY);
          doc.text(`Marque: EGGER`, margin + 15, textY + 5);
          doc.text(`Code: ${ref2.overline}`, margin + 15, textY + 10);
        });
      }
      doc.setFillColor(240, 240, 229);
      doc.rect(
        0,
        doc.internal.pageSize.getHeight() - 20,
        doc.internal.pageSize.getWidth(),
        20,
        "F"
      );
      doc.setFontSize(20);
      doc.text(
        "Contacter J\xE9r\xF4me Provost au 06 23 04 16 37",
        margin,
        doc.internal.pageSize.getHeight() - 7
      );
      doc.save("palette-jp-ebenisterie.pdf");
    }
    watch(file, () => {
      if (file.value) {
        extractColors();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconComponent = __nuxt_component_2$1;
      const _component_PrimaryButton = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "tool" }, _attrs))} data-v-6479ead3><div class="tool__file-viewer" data-v-6479ead3>`);
      if (file.value) {
        _push(`<img class="tool__file-viewer__img"${ssrRenderAttr("src", imageUrl.value)} alt="Uploaded image" data-v-6479ead3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tool__file-viewer__file-uploader" style="${ssrRenderStyle({ opacity: file.value ? 0.4 : 1 })}" data-v-6479ead3><label for="image-upload" class="tool__file-viewer__file-uploader__label" data-v-6479ead3>`);
      _push(ssrRenderComponent(_component_IconComponent, {
        icon: "upload",
        size: "2rem"
      }, null, _parent));
      _push(`<span data-v-6479ead3>T\xE9l\xE9verser une image</span></label><input type="file" id="image-upload" accept=".webp,.png,.svg" class="tool__file-viewer__file-uploader__input" data-v-6479ead3></div></div>`);
      if (colors.value.length > 0) {
        _push(`<div class="tool__file-viewer__palette" data-v-6479ead3><!--[-->`);
        ssrRenderList(colors.value, (color) => {
          _push(`<div class="tool__file-viewer__palette__color" style="${ssrRenderStyle({ backgroundColor: color })}" data-v-6479ead3><span class="tool__file-viewer__palette__color__hex" data-v-6479ead3>${ssrInterpolate(color)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (selectedReferencesWithoutDuplicates.value.length > 0) {
        _push(`<div class="tool__references" data-v-6479ead3><!--[-->`);
        ssrRenderList(selectedReferencesWithoutDuplicates.value, (reference) => {
          _push(`<div class="tool__references__reference" data-v-6479ead3><img${ssrRenderAttr("src", reference.srcset)}${ssrRenderAttr("alt", `reference bois ${reference.title}`)} data-v-6479ead3><span class="tool__references__reference__name" data-v-6479ead3>`);
          _push(ssrRenderComponent(_component_IconComponent, { icon: "swatches" }, null, _parent));
          _push(`${ssrInterpolate(reference.title)}</span><span class="tool__references__reference__brand" data-v-6479ead3>`);
          _push(ssrRenderComponent(_component_IconComponent, { icon: "tag" }, null, _parent));
          _push(`EGGER</span><span class="tool__references__reference__material" data-v-6479ead3>`);
          _push(ssrRenderComponent(_component_IconComponent, { icon: "nut" }, null, _parent));
          _push(`${ssrInterpolate(reference.overline)}</span></div>`);
        });
        _push(`<!--]-->`);
        if (selectedReferencesWithoutDuplicates.value.length > 0) {
          _push(ssrRenderComponent(_component_PrimaryButton, {
            onClick: downloadResult,
            style: { "height": "100%", "max-height": "inherit" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`T\xE9l\xE9charger le r\xE9sultat`);
              } else {
                return [
                  createTextVNode("T\xE9l\xE9charger le r\xE9sultat")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/outil-materiaux-meubles-sur-mesure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const outilMateriauxMeublesSurMesure = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6479ead3"]]);

export { outilMateriauxMeublesSurMesure as default };
//# sourceMappingURL=outil-materiaux-meubles-sur-mesure-NriIiyKJ.mjs.map
