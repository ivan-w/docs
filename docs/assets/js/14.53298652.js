(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kube-notary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kube-notary","aria-hidden":"true"}},[e._v("#")]),e._v(" kube-notary")]),e._v(" "),a("blockquote",[a("p",[e._v("A Kubernetes watchdog for verifying image trust with CodeNotary.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/vchain-us/kube-notary/master/docs/images/info.png",alt:"alt text",title:"CodeNotary for Kubernetes"}})]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("p",[a("strong",[e._v("kube-notary")]),e._v(" is a monitoring tool for "),a("em",[e._v("Continuous Verification")]),e._v(" (CV) via "),a("a",{attrs:{href:"https://codenotary.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary"),a("OutboundLink")],1),e._v(".\nThe idea behind CV is to continuously monitor your cluster at runtime and be notified when unknown or untrusted container images are running.")]),e._v(" "),a("p",[e._v("Once "),a("code",[e._v("kube-notary")]),e._v(" is installed within your cluster, all pods are checked every minute (interval and other settings can be "),a("a",{attrs:{href:"#Configuration"}},[e._v("configured")]),e._v(").\nFor each of the running containers in each pod, "),a("code",[e._v("kube-notary")]),e._v(" resolves the "),a("code",[e._v("ImageID")]),e._v(" of the container's image to the actual image's hash and finally looks up the "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/master/docs/user-guide/signatures.md#signatures",target:"_blank",rel:"noopener noreferrer"}},[e._v("hash's signature in the CodeNotary's blockchain"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Furthermore, kube-notary provides a built-in exporter for sending verification "),a("a",{attrs:{href:"#Metrics"}},[e._v("metrics")]),e._v(" to Prometheus, which can then that can be easily visualized with the provided "),a("a",{attrs:{href:"grafana"}},[e._v("grafana dashboard")]),e._v(".")]),e._v(" "),a("p",[e._v("Images you trust can be signed by using the CodeNotary "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn",target:"_blank",rel:"noopener noreferrer"}},[e._v("vcn"),a("OutboundLink")],1),e._v(" CLI tool.")]),e._v(" "),a("p",[e._v("https://infograph.venngage.com/ps/ex4ECrROPCQ/codenotary-for-kubernetes")]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("p",[a("code",[e._v("kube-notary")]),e._v(" is installed using a Helm chart.")]),e._v(" "),a("blockquote",[a("p",[e._v("Kubernetes 1.9 or above, and Helm 2.8 or above need to be installed in your cluster.")])]),e._v(" "),a("p",[e._v("First, make sure your local config is pointing to the context you want to use (ie. check "),a("code",[e._v("kubectl config current-context")]),e._v(").\nThen, to install "),a("code",[e._v("kube-notary")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Clone this repository locally.")]),e._v(" "),a("li",[e._v("Change directory into "),a("code",[e._v("kube-notary")]),e._v(".")]),e._v(" "),a("li",[e._v("Finally run:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm install -n kube-notary helm/kube-notary\n")])])]),a("blockquote",[a("p",[e._v("See the "),a("a",{attrs:{href:"#Configuration"}},[e._v("Configuration")]),e._v(" paragraph for detailed instructions.")])]),e._v(" "),a("h3",{attrs:{id:"namespaced"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespaced","aria-hidden":"true"}},[e._v("#")]),e._v(" Namespaced")]),e._v(" "),a("p",[e._v("If you do not have cluster-wide access, you can still install "),a("code",[e._v("kube-notary")]),e._v(" within a single namespace, using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('helm install -n kube-notary helm/kube-notary --set watch.namespace="default"\n')])])]),a("p",[e._v("When so configured, a namespaced "),a("code",[e._v("Role")]),e._v(" will be created instead of the default "),a("code",[e._v("ClusterRole")]),e._v(" to accommodate Kubernetes "),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RBAC"),a("OutboundLink")],1),e._v(" for a single namespace. "),a("code",[e._v("kube-notary")]),e._v(" will get permission for, and will watch, the configured namespace only.")]),e._v(" "),a("h3",{attrs:{id:"manual-installation-without-helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-without-helm","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual installation (without Helm)")]),e._v(" "),a("p",[e._v("Alternatively, it is possible to manually install "),a("code",[e._v("kube-notary")]),e._v(" without using Helm. Instructions and templates for manual installation are within the "),a("a",{attrs:{href:"kubernetes"}},[e._v("kubernetes folder")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"uninstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall","aria-hidden":"true"}},[e._v("#")]),e._v(" Uninstall")]),e._v(" "),a("p",[e._v("You can uninstall "),a("code",[e._v("kube-notary")]),e._v(" at any time using:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("helm delete --purge kube-notary\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[a("code",[e._v("kube-notary")]),e._v(" provides both detailed log output and a Prometheus metrics endpoint to monitor the verification status of your running containers. After the installation you will find instructions on how to get them.")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  # Metrics endpoint\n  export SERVICE_NAME=service/$(kubectl get service --namespace default -l "app.kubernetes.io/name=kube-notary,app.kubernetes.io/instance=kube-notary" -o jsonpath="{.items[0].metadata.name}")\n  echo "Check the metrics endpoint at http://127.0.0.1:9581/metrics"\n  kubectl port-forward --namespace default $SERVICE_NAME 9581\n\n  # Results endpoint\n  export SERVICE_NAME=service/$(kubectl get service --namespace default -l "app.kubernetes.io/name=kube-notary,app.kubernetes.io/instance=kube-notary" -o jsonpath="{.items[0].metadata.name}")\n  echo "Check the verification results endpoint at http://127.0.0.1:9581/results"\n  kubectl port-forward --namespace default $SERVICE_NAME 9581\n\n  # Stream logs\n  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=kube-notary,app.kubernetes.io/instance=kube-notary" -o jsonpath="{.items[0].metadata.name}")\n  kubectl logs --namespace default -f $POD_NAME\n\n  # Bulk sign all running images\n  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=kube-notary,app.kubernetes.io/instance=kube-notary" -o jsonpath="{.items[0].metadata.name}")\n  kubectl exec --namespace default -t $POD_NAME sh /bin/bulk_sign > vcn_bulk_sign.sh\n  chmod +x vcn_bulk_sign.sh && ./vcn_bulk_sign.sh\n')])])]),a("h3",{attrs:{id:"status-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-page","aria-hidden":"true"}},[e._v("#")]),e._v(" Status page")]),e._v(" "),a("p",[a("code",[e._v("kube-notary")]),e._v(" provides an embedded status page with details of running containers and verifications. Once "),a("code",[e._v("kube-notary")]),e._v(" is up and running the page is available at "),a("code",[e._v("http://$SERVICE_ADDRESS:9581/status/")]),e._v(" (the service address depends on your installation). If you installed it by using the provided helm chart, the easiest way to get the status page URL is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  # Status page\n  export SERVICE_NAME=service/$(kubectl get service --namespace default -l "app.kubernetes.io/name=kube-notary,app.kubernetes.io/instance=kube-notary" -o jsonpath="{.items[0].metadata.name}")\n  echo "Status page at http://127.0.0.1:9581/status/"\n  kubectl port-forward --namespace default $SERVICE_NAME 9581\n')])])]),a("h3",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),a("p",[e._v("If a Prometheus installation is running within your cluster, metrics provided by "),a("code",[e._v("kube-notary")]),e._v(" will be automatically discovered.\nFurthermore, you can find an example of a preconfigured Grafana dashboard "),a("router-link",{attrs:{to:"/integrations/kube-notary/grafana/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("By default, "),a("code",[e._v("kube-notary")]),e._v(" is installed into the current namespace (you can change it by using "),a("code",[e._v("helm install --namespace")]),e._v(") but it will watch to pods in all namespaces.")]),e._v(" "),a("p",[e._v("At install time you can change any values of "),a("a",{attrs:{href:"helm/kube-notary/values.yaml"}},[e._v("helm/kube-notary/values.yaml")]),e._v(" by using the Helm's "),a("code",[e._v("--set")]),e._v(" option.\nFor example, to instruct "),a("code",[e._v("kube-notary")]),e._v(" to check only the "),a("code",[e._v("kube-system")]),e._v(" namespace, just use:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('helm install -n kube-notary helm/kube-notary --set watch.namespace="kube-system"\n')])])]),a("h3",{attrs:{id:"trusted-signers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trusted-signers","aria-hidden":"true"}},[e._v("#")]),e._v(" Trusted signers")]),e._v(" "),a("p",[e._v("Choosing signers who can be trusted is easy. At install time, you can "),a("code",[e._v("--set")]),e._v(" one of the following options.")]),e._v(" "),a("h4",{attrs:{id:"configure-a-list-of-trusted-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-list-of-trusted-keys","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure a list of trusted keys")]),e._v(" "),a("p",[e._v("Lists can be expressed by enclosing keys in "),a("code",[e._v("{")]),e._v(" and "),a("code",[e._v("}")]),e._v(" separated by "),a("code",[e._v(",")]),e._v(". For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('helm install -n kube-notary helm/kube-notary --set "trust.keys={0x123..., 0x123...}"\n')])])]),a("h4",{attrs:{id:"configure-a-trusted-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-a-trusted-organization","aria-hidden":"true"}},[e._v("#")]),e._v(" Configure a trusted organization")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('helm install -n kube-notary helm/kube-notary --set "trust.org=your.organization.com"\n')])])]),a("h4",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note","aria-hidden":"true"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("If both "),a("code",[e._v("trust.org")]),e._v(" and "),a("code",[e._v("trust.keys")]),e._v(" are set, only "),a("code",[e._v("trust.org")]),e._v(" will be used.")]),e._v(" "),a("p",[e._v("If none is set, the last "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/master/docs/user-guide/signatures.md#signatures",target:"_blank",rel:"noopener noreferrer"}},[e._v("signature"),a("OutboundLink")],1),e._v(" by the signer with the highest available "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/master/docs/user-guide/signatures.md#level",target:"_blank",rel:"noopener noreferrer"}},[e._v("level"),a("OutboundLink")],1),e._v(" will be used during the verification.")]),e._v(" "),a("h3",{attrs:{id:"runtime-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Runtime configuration")]),e._v(" "),a("p",[e._v("The following options within "),a("a",{attrs:{href:"helm/kube-notary/values.yaml"}},[e._v("helm/kube-notary/values.yaml")]),e._v(" have effect on the "),a("code",[e._v("kube-notary")]),e._v(" runtime behavior.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Runtime config\nlog:\n  level: info # verbosity level, one of: trace, debug, info, warn, error, fatal, panic\nwatch: \n  namespace: "" # the namespace name to watch \n  interval: 60s # duration of the watching interval\ntrust:\n  org: "" # ID of the trusted organization, if not empty `keys` above will be ignored\n  keys: # array of signing keys to verify against\n   - ...\n   - ...\n')])])]),a("p",[e._v("During the installation, they are stored in a "),a("code",[e._v("configmap")]),e._v(". Configuration hot-reloading is supported, so you can modify and apply the configmap while "),a("code",[e._v("kube-notary")]),e._v(" is running.")]),e._v(" "),a("p",[e._v("For example, to change the watching interval from default to "),a("code",[e._v("30s")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kubectl patch configmaps/kube-notary \\\n    --type merge \\\n    -p \'{"data":{"config.yaml":"log:\\n  level: debug\\nwatch: \\n  namespace: \\n  interval: 30s"}}\'\n')])])]),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h3",{attrs:{id:"why-continuous-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-continuous-verification","aria-hidden":"true"}},[e._v("#")]),e._v(" Why "),a("em",[e._v("Continuous Verification")]),e._v(" ?")]),e._v(" "),a("p",[e._v("Things change over time. Suppose you signed an image because you trust it. Later, you find a security issue within the image or you just want to deprecate that version. When that happens you can simply use "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn#basic-usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("vcn"),a("OutboundLink")],1),e._v(" to "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/master/docs/user-guide/signatures.md#statuses",target:"_blank",rel:"noopener noreferrer"}},[e._v("untrust or unsupport"),a("OutboundLink")],1),e._v(" that image version. Once the image is not trusted anymore,\nthanks to "),a("code",[e._v("kube-notary")]),e._v(" you can easily discover if the image is still running somewhere in your cluster.")]),e._v(" "),a("p",[e._v("In general, verifying an image just before its execution is not enough because the image's status or the image that's used by a container can change over time. "),a("em",[e._v("Continuous Verification")]),e._v(" ensures that you will always get noticed if an unwanted behavior occurs.")]),e._v(" "),a("h3",{attrs:{id:"how-can-i-sign-my-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-sign-my-image","aria-hidden":"true"}},[e._v("#")]),e._v(" How can I sign my image?")]),e._v(" "),a("p",[e._v("You can easily sign your container's images by using the "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn",target:"_blank",rel:"noopener noreferrer"}},[e._v("vcn CLI"),a("OutboundLink")],1),e._v(" we provide separately.")]),e._v(" "),a("p",[a("code",[e._v("vcn")]),e._v(" supports local Docker installations out of the box using "),a("code",[e._v("docker://")]),e._v(" prefix, followed by the image name or image reference.\nYou just have to pull the image you want to sign, then finally run "),a("code",[e._v("vcn sign")]),e._v(". Detailed instructions can be found "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn/blob/master/docs/DOCKERINTEGRATION.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Furthermore, if you want to bulk sign all images running inside your cluster, you will find below instructions to generate a script that automates the process.")]),e._v(" "),a("p",[e._v("Export "),a("code",[e._v("POD_NAME")]),e._v(" setting it to the "),a("code",[e._v("kube-notary")]),e._v("'s pod name, then run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec --namespace default -t $POD_NAME sh /bin/bulk_sign > vcn_bulk_sign.sh\nchmod +x vcn_bulk_sign.sh && ./vcn_bulk_sign.sh\n")])])]),a("blockquote",[a("p",[e._v("Note that a "),a("a",{attrs:{href:"https://codenotary.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeNotary"),a("OutboundLink")],1),e._v(" account and a local installation of "),a("a",{attrs:{href:"https://github.com/vchain-us/vcn",target:"_blank",rel:"noopener noreferrer"}},[e._v("vcn"),a("OutboundLink")],1),e._v(" are needed.\nAlso, make sure your "),a("code",[e._v("kubectl")]),e._v(" is pointing to the context you want to use.")])]),e._v(" "),a("h3",{attrs:{id:"how-can-i-be-notified-when-untrusted-images-are-runnig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-be-notified-when-untrusted-images-are-runnig","aria-hidden":"true"}},[e._v("#")]),e._v(" How can I be notified when untrusted images are runnig?")]),e._v(" "),a("p",[e._v("First, Prometheus and Grafana need to be installed in your cluster.")]),e._v(" "),a("p",[e._v("Then it's easy to "),a("a",{attrs:{href:"grafana#creating-alerts"}},[e._v("create alerts")]),e._v(" using the provided "),a("a",{attrs:{href:"grafana"}},[e._v("Grafana dashboard")])]),e._v(" "),a("h3",{attrs:{id:"why-my-image-cannot-be-signed-manifest-v2-schema-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-my-image-cannot-be-signed-manifest-v2-schema-1","aria-hidden":"true"}},[e._v("#")]),e._v(" Why my image cannot be signed? (manifest v2 schema 1)")]),e._v(" "),a("p",[e._v("The image manifest v2 schema 1 format is "),a("a",{attrs:{href:"https://docs.docker.com/engine/deprecated/#pushing-and-pulling-with-image-manifest-v2-schema-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("deprecated"),a("OutboundLink")],1),e._v(" in favor of the v2 schema 2 format.")]),e._v(" "),a("p",[e._v("Please, move to v2 schema 2 as soon as possible. Usually, you can fix that simply by pushing your image again on the registry.")]),e._v(" "),a("h3",{attrs:{id:"cannot-create-resource-clusterrolebindings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-create-resource-clusterrolebindings","aria-hidden":"true"}},[e._v("#")]),e._v(' Cannot create resource "clusterrolebindings"')]),e._v(" "),a("p",[e._v("Recent versions of Kubernetes employ a "),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("role-based access control"),a("OutboundLink")],1),e._v(" (or RBAC) system to drive authorization decisions. It might be possible that your account does not have enough privileges to create the "),a("code",[e._v("ClusterRole")]),e._v(" needed to get cluster-wide access.")]),e._v(" "),a("p",[e._v("Please use a high privileged account to install "),a("code",[e._v("kube-notary")]),e._v(". Alternatively, if you don't have cluster-wide access, you can still install "),a("code",[e._v("kube-notary")]),e._v(" to work in a single namespace which you can access. See the "),a("a",{attrs:{href:"#Namespaced"}},[e._v("namespaced installation")]),e._v(" paragraph for further details.")]),e._v(" "),a("h3",{attrs:{id:"helm-error-release-kube-watch-failed-namespaces-is-forbidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-error-release-kube-watch-failed-namespaces-is-forbidden","aria-hidden":"true"}},[e._v("#")]),e._v(' Helm error: release kube-watch failed: namespaces "..." is forbidden')]),e._v(" "),a("p",[e._v("It might be possible that "),a("code",[e._v("tiller")]),e._v(" (the Helm's server-side component) does not have permission to install "),a("code",[e._v("kube-notary")]),e._v(".")]),e._v(" "),a("p",[e._v("When working within a "),a("a",{attrs:{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("role-based access control"),a("OutboundLink")],1),e._v(" enabled Kubernetes installation, you may need to add a "),a("a",{attrs:{href:"https://helm.sh/docs/using_helm/#tiller-and-role-based-access-control",target:"_blank",rel:"noopener noreferrer"}},[e._v("service account with cluster-admin role"),a("OutboundLink")],1),e._v(" for "),a("code",[e._v("tiller")]),e._v(".")]),e._v(" "),a("p",[e._v("The easier way to do that is just to create a "),a("code",[e._v("rbac-config.yaml")]),e._v(" copying and pasting the "),a("a",{attrs:{href:"https://helm.sh/docs/using_helm/#example-service-account-with-cluster-admin-role",target:"_blank",rel:"noopener noreferrer"}},[e._v("provided example in the Helm documentation"),a("OutboundLink")],1),e._v(", then:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ kubectl create -f rbac-config.yaml\nserviceaccount "tiller" created\nclusterrolebinding "tiller" created\n$ helm init --service-account tiller --history-max 200\n')])])]),a("h2",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make test/e2e\n")])])]),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("This software is released under "),a("a",{attrs:{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPL3"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);