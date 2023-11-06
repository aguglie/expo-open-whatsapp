package net.guglio.openwhatsapp

import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URLEncoder


class ExpoOpenWhatsappModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("ExpoOpenWhatsapp")

        Function("getInstalled") {
            val hasWhatsapp = isPackageInstalled("com.whatsapp")
            val hasWhatsappBusiness = isPackageInstalled("com.whatsapp.w4b")

            return@Function mapOf<String, Boolean>(
                    "whatsapp" to hasWhatsapp,
                    "whatsappBusiness" to hasWhatsappBusiness
            )
        }

        Function("sendWhatsapp") { target: String, message: String ->
            openWhatsapp(target, message, "com.whatsapp")
        }

        Function("sendWhatsappBusiness") { target: String, message: String ->
            openWhatsapp(target, message, "com.whatsapp.w4b")
        }
    }

    private fun isPackageInstalled(packageName: String): Boolean {
        val packageManager = appContext.reactContext?.packageManager ?: return false

        return try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                packageManager.getApplicationInfo(packageName, PackageManager.ApplicationInfoFlags.of(0))
            } else {
                packageManager.getApplicationInfo(packageName, PackageManager.GET_META_DATA)
            }
            true
        } catch (e: PackageManager.NameNotFoundException) {
            false
        }
    }

    private fun openWhatsapp(target: String, message: String, packageName: String): Unit {
        val intent = Intent(Intent.ACTION_VIEW)
        intent.setPackage(packageName)
        intent.data = Uri.parse("https://wa.me/$target?text=${URLEncoder.encode(message, "UTF-8")}")
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)

        val activity = appContext.activityProvider?.currentActivity
        activity?.startActivity(intent)
    }
}
